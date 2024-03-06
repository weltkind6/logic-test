import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { useState } from "react";
import Brain1 from "../../images/мозг1.png";
import Brain3 from "../../images/мозг3.png";
import "./style.css";

interface ResultsProps {
  correctAnswers: number;
  resetAnswers?: (data: boolean) => void | undefined;
}

export default function Results({
  correctAnswers,
  resetAnswers,
}: ResultsProps) {
  const [isResetAnswers, setIsResetAnswers] = useState(false);
  console.log("correctAnswers", correctAnswers);

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
  if (correctAnswers <= 3) {
    smileDictionary = "😟";
  }
  if (correctAnswers > 3) {
    smileDictionary = "😊";
  }
  if (correctAnswers >= 5) {
    smileDictionary = "😃";
  }

  return (
    <div className="resultWrapper">
      <div>
        Вы ответили правильно на {correctAnswers} {questionWord} из 10.{" "}
        {smileDictionary}
      </div>
      <img
        src={correctAnswers < 5 ? Brain1 : Brain3}
        alt="brain"
        className="resultImg"
      />
      <Link to="/main">
        <Button onClick={resetHandler} positive size="small">
          Попробовать снова
        </Button>
      </Link>
    </div>
  );
}
