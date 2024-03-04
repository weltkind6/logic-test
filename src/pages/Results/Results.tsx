import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function Results() {
  return (
    <div>
        Ваши результаты не очень впечатляют....

        <Link to="/main">
        <Button secondary>Попробовать снова</Button>
      </Link>
    </div>
  )
}
