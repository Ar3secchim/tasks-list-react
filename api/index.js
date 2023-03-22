import {routes} from './routes.js';
import express  from 'express';
import cors from 'cors';

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3002, () => {
  console.log('🔥 Server running on port http://localhost:3002');
})