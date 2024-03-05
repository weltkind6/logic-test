import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import './style.css'
import { useState } from 'react';


interface ResultsProps {
  correctAnswers: number
  resetAnswers?: (data: boolean) => void | undefined;
}

export default function Results({correctAnswers, resetAnswers}: ResultsProps) {
  const [isResetAnswers, setIsResetAnswers] = useState(false);

  if (resetAnswers) {
    resetAnswers(isResetAnswers)
  };

  const resetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsResetAnswers(prevState => !prevState);
  };

  const questionWord = correctAnswers === 1 ? 'вопрос' : 'вопросов';

  return (
    <div className='resultWrapper'>
         <div>Вы ответили правильно на  {correctAnswers} {questionWord} из 10.</div>
        <Link to="/main">
        <Button
        onClick={resetHandler} 
        positive size='small'
        >Попробовать снова
        </Button>
      </Link>
    </div>
  )
}
