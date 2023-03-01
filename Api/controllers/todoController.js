let toDoList =[
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Paul',
  }
]

export function create(req, res){
  const { name } = req.body;

  const newToDo = {
    id: toDoList.length+1,
    name: name,
  }
  toDoList.push(newToDo);

  res.status(204).end(JSON.stringify(newToDo))
}

export function update(req, res){
  const { id, name } = req.body;

  const todoExist = toDoList.find((todo) => todo.id === id);

  if (!todoExist) {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Todo not found' }));
  }

  toDoList = toDoList.map((todo) =>{
    if(todo.id === id){
      return {
        id,
        name,
      }
    }
    return todo;
  })

  res.statusCode = 204;
  res.end(JSON.stringify({id, name}));

}

export function deleteTodo(req, res){
  const { id } = req.body

  const todoExist = toDoList.find((todo) => todo.id === Number(id));

  if (!todoExist) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  toDoList = toDoList.filter((todo) => todo.id !== Number(id));
  res.statusCode = 204;
  res.end(JSON.stringify(toDoList));
}

export function findAll (req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(toDoList));
}