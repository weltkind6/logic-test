import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { data } from "../../store/data";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

interface ExampleProps {
  callback?: (data: number) => void;
  isResetScore?: boolean;
}

export default function Example({ callback, isResetScore }: ExampleProps) {
  const navigate = useNavigate();
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  const [selected, setSelected] = useState(data[0]);
  const [correctQuestionIndex, setCorrectQuestionIndex] = useState(0);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  if (callback) {
    callback(totalCorrectAnswers);
  }

  useEffect(() => {
    if (index === 3) {
      navigate("/finish");
    }
  }, [index]);

  useEffect(() => {
    if(isResetScore) {
      setTotalCorrectAnswers(0)
    }
  }, [isResetScore]);

  const nextQuestionHandler = () => {
    setIndex((prev) => prev + 1);
    setQuestion(data[index + 1]);
    if (selectedQuestionIndex === correctQuestionIndex) {
      setTotalCorrectAnswers((prev) => prev + 1);
    }
    setIsAnswerSelected(false);
  };

  const checkCorrectAnswerHandler = (index: number, correctIndex: number) => {
    setCorrectQuestionIndex(correctIndex);
    setSelectedQuestionIndex(index);
    setIsAnswerSelected(true);
  };

  return (
    <div className="w-full px-4 py-16 block">
      <h2 style={{fontStyle: 'italic'}}>Вопрос #{question?.id}</h2>
      <h3 className="question">{question?.question}</h3>
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {question?.variants.map((el, index) => (
              <RadioGroup.Option
                onClick={() =>
                  checkCorrectAnswerHandler(index, question?.correctIndex)
                }
                key={index}
                value={el}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
                   ${checked ? "bg-sky-900/75 text-white" : "bg-white"}
                     relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            <span style={{fontWeight: '600'}}>{`Вариант ${index + 1}`}</span>
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span style={{fontSize: '18px'}}>{el}</span>{" "}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div>
        <Button
          onClick={nextQuestionHandler}
          className="questionBtn"
          content="Дальше"
          icon="right arrow"
          labelPosition="right"
          disabled={!isAnswerSelected}
        />
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
