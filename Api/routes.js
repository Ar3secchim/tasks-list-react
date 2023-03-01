import {Router} from 'express';
import { create, findAll, deleteTodo, update } from './controllers/todoController.js';

export const routes = Router()

routes.get('/', findAll)
routes.post('/', create)
routes.delete('/', deleteTodo)
routes.put('/', update)