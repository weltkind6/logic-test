import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


interface ResultsProps {
  correctAnswers: number
}

export default function Results({correctAnswers}: ResultsProps) {

  return (
    <div>
        Ваши результаты впечатляют....и это:
         {correctAnswers}
        <Link to="/main">
        <Button secondary>Попробовать снова</Button>
      </Link>
    </div>
  )
}
