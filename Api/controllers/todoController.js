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
  const { body } = req;

  const newToDo = {
    id: toDoList.length + 1,
    name: body.name,
  }
  toDoList.push(newToDo);
  
  res.statusCode = 201;
  res.end(JSON.stringify(newToDo));
}

export function update(req, res){
  const { body } = req;
  console.log(body)

  let id = body.id;
  id = Number(id);

  const name = body.name;
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
  const { body } = req;

  let id = body.id;
  id = Number(id);

  toDoList = toDoList.filter((todo) => todo.id !== id);

  res.statusCode = 204;
  res.end(JSON.stringify(toDoList));
}

export function list (req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(toDoList));
}