import { ReactComponent as Tasks } from '../assets/tasks.svg'
import { ReactComponent as Boards } from '../assets/board.svg'

import { CardTasks } from '../components/CardTasks/CardTasks'
import { Container, Title } from './styles'
function App() {

  return (
    <>
      <div>
        <Container>
          <Tasks />
          <Title>Adicionar uma tarefa</Title>
        </Container>

        <Container>
          <input placeholder='Escreva sua tarefa' />
          <button>Adicionar tarefas</button>
        </Container>
      </div>

      <Container>
        <Boards />
        <Title>Quadro de tarefas</Title>
      </Container>

      <CardTasks />

    </>
  )
}

export default App
