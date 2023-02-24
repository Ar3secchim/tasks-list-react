import { create, list, deleteTodo, update } from './controllers/todoController.js';

export const routes = [
  {
    endpoint: '/', 
    method: 'GET',
    handler: list
  },
  {
    endpoint: '/',
    method: 'POST',
    handler: create
  },
  {
    endpoint: '/',
    method: 'PUT',
    handler: update
  },
  {
    endpoint: '/',
    method: 'DELETE',
    handler: deleteTodo
  },
]
