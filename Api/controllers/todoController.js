import  { prisma }  from "../interfaces/database.js";

export const  create= async (req, res)=> {
  const { name, status } = req.body;

  const newToDo= await prisma.task.create({
    data: {
      name,
      status,
    }
  })

  res.status(201).end(JSON.stringify(newToDo))
}

export const  update = async (req, res)=>{
  const { id, name } = req.body;
  try{
    await prisma.task.update({
      where: {
        id,
      },
      data: {
        name,
      },
    })
  }catch(err){
  res.status(400).json({message: err.message})
  }

  res.status(204).end()
}

export const  deleteTodo= async (req, res) =>{
  const { id } = req.body
  try{
    await prisma.task.delete({
      where: {
        id,
      }
    })
  } catch(err){
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'tasks do not exist' }));
  }

  res.status(200).end();
}

export const findAll = async (req, res)=>{
  const toDoList = await prisma.task.findMany();

  res.status(200).end(JSON.stringify(toDoList));
}