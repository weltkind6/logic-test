import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const FinishPage = () => {
  return (
    <div>
      <h2>
        Поздравляем! Вы вволнили тест. Нажмите на кнопку, что бы получить
        результат
      </h2>
      <Link to="/results">
        <Button secondary>Результат</Button>
      </Link>
    </div>
  );
};

export default FinishPage;
