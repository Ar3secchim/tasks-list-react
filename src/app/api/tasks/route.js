import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(Request , Response){
  const toDoList = await prisma.task.findMany();
  return  toDoList
}