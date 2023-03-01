import {routes} from './routes.js';
import express  from 'express';
// import {bodyParser} from './helpers/bodyParser.js'

const app = express();

app.use(express.json());
app.use(routes)

app.listen(3000, () => {
  console.log('🔥 Server running on port http://localhost:3000');
})