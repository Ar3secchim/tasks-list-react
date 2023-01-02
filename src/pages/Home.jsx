import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import { ReactComponent as Tasks } from '../assets/tasks.svg'
import { ReactComponent as Boards } from '../assets/board.svg'

import { CardTasks } from '../components/CardTasks/CardTasks'
import { Container, Title } from './styles'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const notifyError = () => {
    toast.error("Adicione um tarefa", {
      position: "top-center",
      theme: "colored",
      autoClose: 2000,
    });
  }

  const notifyTaskAdd = () => {
    toast.success("Tarefa adicionada", {
      position: "top-center",
      theme: "light",
      autoClose: 2000,
    });
  }

  const [task, setTask] = useState("")
  const [listTasks, setListTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("listLocalStorage"))
  })
  const [listLocalStorage, setListLocalStorage] = useState(listTasks)

  useEffect(() => {
    setListLocalStorage(listTasks)
    localStorage.setItem("listLocalStorage", JSON.stringify(listTasks))
  }, [listTasks]);

  const addTasks = () => {
    if (!task) return notifyError()

    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    }
    setListTasks([...listTasks, newTask])
    notifyTaskAdd()
    setTask("")
  }



  const removeTasks = (id) => {
    const NewList = listTasks.filter((task) => task.id !== id);
    setListTasks(NewList)
  }

  const checkedTask = (id, checked) => {
    const index = listTasks.findIndex(task => task.id === id)
    const newList = listTasks
    newList[index].checked = !checked
    setListTasks([...newList])
  }



  return (
    <>
      <ToastContainer />
      <div>
        <Container>
          <Tasks />
          <Title>Adicionar uma tarefa</Title>

        </Container>

        <Container>
          <input type="text" placeholder="Descreva sua tarefa"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />

          <button onClick={addTasks} >Adicionar tarefas</button>
        </Container>
      </div>

      <Container>
        <Boards />
        <Title>Quadro de tarefas</Title>
      </Container>

      {listTasks.map((task) => {
        return <CardTasks
          Name={task.task}
          key={task.id}
          Checked={task.checked}
          RemoveTask={() => removeTasks(task.id)}
          CheckedTask={() => checkedTask(task.id, task.checked)}
        />
      })}
    </>
  )
}

export default App
