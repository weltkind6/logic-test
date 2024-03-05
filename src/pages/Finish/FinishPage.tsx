import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import './style.css'

const FinishPage = () => {
  return (
    <div className="finishWrapper">
      <h2>
        Поздравляем! <br/> Вы выолнили тест. <br/>Нажмите на кнопку, что бы получить
        результат 🤩
      </h2>
      <Link to="/results">
        <Button 
        className="finishBtn btn"
        color="teal"
        >Результат
        </Button>
      </Link>
    </div>
  );
};

export default FinishPage;
