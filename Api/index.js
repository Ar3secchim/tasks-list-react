import http, { METHODS } from 'http';

const toDoList =[
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Paul',
  }
]

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  if(req.method === 'POST'){
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      const content = Buffer.concat(body).toString();
      const data = JSON.parse(content);
      const newToDo = {
        id: toDoList.length + 1,
        name: data.name,
      }
      toDoList.push(newToDo);
      
      res.statusCode = 201;
      res.end(JSON.stringify(newToDo));
    })

  }else{
    res.statusCode = 200;
    res.end(JSON.stringify(toDoList));
  }
});

server.listen(3000)