import { Link, Route, Routes } from "react-router-dom";
import { Button } from "semantic-ui-react";


const GreetingPage = () => {
  return (
    <div>
       <h1>Приветствуем тебя!</h1>
       <h2>Введите ваше имя и нажмите кнопку "начать"!</h2>
       <p>
        У вас есть 30 секнудн что бы ответить на каждый вопрос.
       </p>
         <Link to="main">
           <Button>Начать</Button>
         </Link>
    </div>
  )
}

export default GreetingPage;