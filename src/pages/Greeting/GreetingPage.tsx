import { Link, Route, Routes } from "react-router-dom";
import { Button } from "semantic-ui-react";
import './style.css'


const GreetingPage = () => {
  return (
    <div className="greetingWrapper">
       <h1>Приветствуем тебя!</h1>
       <h2>Введите ваше имя , и нажмите кнопку "начать".</h2>
       <p>
        У вас есть 30 секунд что бы ответить на каждый вопрос.
       </p>
         <Link to="main">
           <Button color='orange' className="greetBtn">Начать!</Button>
         </Link>
    </div>
  )
}

export default GreetingPage;