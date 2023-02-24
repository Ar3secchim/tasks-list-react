import http from 'http';
import url from 'url';
import {routes} from './routes.js';
import {bodyParser} from './helpers/bodyParser.js';


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  const parsedUrl = url.parse(req.url)

  const route = routes.find((routeObj) => 
    routeObj.endpoint === parsedUrl.pathname && routeObj.method === req.method
  );

  if (route) {
    if(req.method === "GET"){
      route.handler(req, res);
    }else{
      bodyParser(req, () => route.handler(req, res));
    }
  }else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(`Cannot ${req.method} ${parsedUrl.pathname}`);
  }
});

server.listen(3000, () => {
  console.log('🔥 Server running on port 3000');
})