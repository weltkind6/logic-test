import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { useState } from "react";
import Brain1 from "../../images/мозг1.png";
import Brain3 from "../../images/мозг3.png";
import { data } from "../../store/data";
import "./styles.css";

interface ResultsProps {
  correctAnswers: number;
  resetAnswers?: (data: boolean) => void | undefined;
  selectedQuestionIndices: number[];
}

export default function Results({
  correctAnswers,
  resetAnswers,
  selectedQuestionIndices,
}: ResultsProps) {
  const [isResetAnswers, setIsResetAnswers] = useState(false);

  if (resetAnswers) {
    resetAnswers(isResetAnswers);
  }

  const resetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsResetAnswers((prevState) => !prevState);
  };

  let questionWord = "вопросов";
  if (correctAnswers === 1) {
    questionWord = "вопрос";
  } else if (correctAnswers > 1 && correctAnswers < 5) {
    questionWord = "вопроса";
  } else if (correctAnswers === 5) {
    questionWord = "вопросов";
  }

  let smileDictionary = "";
  if (correctAnswers <= 5) {
    smileDictionary = "😟";
  }
  if (correctAnswers > 5) {
    smileDictionary = "😊";
  }
  if (correctAnswers >= 10) {
    smileDictionary = "😃";
  }

  return (
    <div className="resultWrapper">
      <div className="resultTitle">
        Вы ответили правильно на {correctAnswers} {questionWord} из 13.{" "}
        {smileDictionary}
      </div>
      <img
        src={correctAnswers < 5 ? Brain1 : Brain3}
        alt="brain"
        className="resultImg"
      />
      <div className="answersWrapper">
        {data.map((el, index) => (
          <div key={el.id} className="questionItem">
            <div>
              <strong>Вопрос {el.id}:</strong>
              <div className="answerQuestion">{el.question}</div>
              <div>
                <div>
                  Правильный ответ:{" "}
                  {el.variants.map((item, index) =>
                    Number(index) === el.correctIndex ? (
                      <div style={{ color: "red" }}>{item}</div>
                    ) : (
                      ""
                    )
                  )}
                </div>
                <div>
                  <div>
                    <strong>
                    Ваш ответ:{" "}
                      {el.variants[selectedQuestionIndices[index]]}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/main">
        <Button onClick={resetHandler} positive size="small" className="resultsBtn">
          Попробовать снова
        </Button>
      </Link>
    </div>
  );
}
