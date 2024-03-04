import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { data } from "../../store/data";
import { Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

export default function Example() {
  const [questionsData, setQuestionsData] = useState(data);
  const [selected, setSelected] = useState(data[0]);
  const navigate = useNavigate();

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  console.log('questionsData', questionsData.length);

  useEffect(() => {
    if (index === 3) {
      navigate('/finish');
    }
  }, [index]);


  console.log('index', index);

  const nextQuestionHandler = () => {
    setIndex((prev) => prev + 1);
    setQuestion(data[index + 1]);
   
  };

  return (
    <div className="w-full px-4 py-16">
      <h2>Вопрос #{question?.id}</h2>
      <h3>{question?.question}</h3>
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {question?.variants.map((el, index) => (
              <RadioGroup.Option
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
                            {`Вариант ${index + 1}`}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span>{el}</span>{" "}
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
        <Button onClick={nextQuestionHandler} primary>
          Дальше
        </Button>
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
