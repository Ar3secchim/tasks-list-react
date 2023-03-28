import { useState, useEffect } from 'react'
import { ToastContainer, toast  } from 'react-toastify';
import axios from 'axios';

import { ReactComponent as Tasks } from '../assets/tasks.svg'
import { ReactComponent as Boards } from '../assets/board.svg'

import { CardTasks } from '../components/CardTasks'
import {DarkMode}  from '../components/ButtonDarkMode/index'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [task, setTask] = useState("")
  const [ arrayTasks, setArrayTasks] = useState([])
  const [listTasks, setListTasks] = useState(arrayTasks)

  useEffect(() => {
    fetch("https://tasks-list-react-api.vercel.app/")
      .then(response => response.json())
      .then(data => setArrayTasks(data))
      .catch(error => console.error(error));
  }, [listTasks]);

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

  const addTasks = () => {
    if (!task) return notifyError()
    axios.post("https://tasks-list-react-api.vercel.app/", {
        name: task,
        status : false,
    }) .then(response => {
      setListTasks(arrayTasks.push(data => response.data ))
    }).catch(error => console.log(error))

    notifyTaskAdd()
    setTask("")
  }

  const removeTasks = (id) => {
    axios.delete(`https://tasks-list-react-api.vercel.app/${id}`,{
      data: {
        id
      }
    })
    .then(response => {
      setListTasks(arrayTasks.filter(data => task.id !== id))
    }).catch(error => console.log(error))
  }

  const updateTask = (id, status, name) => {
    axios.put(`https://tasks-list-react-api.vercel.app/${id}`, {
      id,
      name,
      status: !status,
    })
    .then(response => {
      setListTasks(arrayTasks.map(data => data.id === id
        ? response.data : { ...data})
      )
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="container flex flex-col items-center h-screen" >
      <ToastContainer />
      <div className="w-4/5">
        <div className="flex gap-4 h-20 justify-between justify-items-center ">
          <div className="flex gap-4 items-center">
            <Tasks />
            <h2 className="text-xl">Adicionar uma tarefa</h2>
          </div>

          <DarkMode />
        </div>

        <div className="flex gap-3 mb-10 justify-between">
          <input className="input input-bordered w-full max-w"  type="text" placeholder="Descreva sua tarefa"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />

          <button className="btn flex-shrink text-xs md:flex-shrink-0" onClick={addTasks} >Adicionar tarefas</button>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-4/5">
        <div className="flex gap-4 items-center mb-6">
          <Boards />
          <h2 className="text-xl">Quadro de tarefas</h2>
        </div>

        {arrayTasks.map((task) => {
          return <CardTasks
            Name={task.name}
            key={task.id}
            Status={task.status}
            RemoveTask={() => removeTasks(task.id)}
            CheckedTask={() => updateTask(task.id, task.status, task.name)}
          />
        })}
      </div>
    </div>
  )
}

export default App
