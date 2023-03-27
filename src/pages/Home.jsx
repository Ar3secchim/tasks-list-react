import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import { ReactComponent as Tasks } from '../assets/tasks.svg'
import { ReactComponent as Boards } from '../assets/board.svg'

import { CardTasks } from '../components/CardTasks/CardTasks'
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
        <div className="flex gap-4 h-20 justify-between justify-items-center">
          <div className="flex gap-4 items-center">
            <Tasks />
            <h2 className="text-xl">Adicionar uma tarefa</h2>
          </div>

          <button>
            <label className="swap swap-rotate">
              <input type="checkbox" />

              <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>

              <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>

            </label>
          </button>
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
