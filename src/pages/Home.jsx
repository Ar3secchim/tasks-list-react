import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

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
  const [listTasks, setListTasks] = useState([])

  useEffect(() => {
      fetch("http://localhost:3000")
      .then(response => response.json())
      .then(data => setListTasks(data))
      .catch(error => console.error(error));
  }, [listTasks]);

  const addTasks = () => {
    if (!task) return notifyError()

    axios.post("http://localhost:3000/", {
        name: task,
        status : false,
    }) .then(response => {
      setTask("")
    })
    .catch(error => {
      console.log(error);
    });

    notifyTaskAdd()
    setTask("")
  }

  const removeTasks = (id) => {
    axios.delete(`http://localhost:3000/${id}`,{
      data: {
        id
      }
    })
    .then(response => {
      setListTasks(listTasks.filter(data => task.id !== id))
    })
    .catch(error => {
      console.log(error);
    })
  }

  const updateTask = (id, status, name) => {
    axios.put(`http://localhost:3000/${id}`, {
      id,
      status: !status,
      name,
    })
    .then(response => {
      setListTasks(listTasks.map(data => data.id === id
        ? response.data :
        {...data})
      )
    })
    .catch(error => {
      console.log(error);
    })
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
          Name={task.name}
          key={task.id}
          Status={task.status}
          RemoveTask={() => removeTasks(task.id)}
          CheckedTask={() => updateTask(task.id, task.status, task.name)}
        />
      })}
    </>
  )
}

export default App
