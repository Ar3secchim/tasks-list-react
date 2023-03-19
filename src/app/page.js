'use client'
import axios from 'axios';
import { useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import  Tasks  from './assets/tasks.svg'
import { Boards } from './assets/board.svg'
import { Container, Title } from './styles'


const Home = () => {
  const [task, setTask] = useState("")
  const [listTasks, setListTasks] = useState([])

 useEffect( () => {
  async function getData() {
      try {
          const res = await axios.get('/api/tasks');
          setListTasks(res.data);
      } catch (err) {
          console.log(err);
      }
  }
  getData();
  }, [setListTasks]);

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

    </>
  )
}



export default Home