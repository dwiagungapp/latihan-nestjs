import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { tasks } from './data/tasks';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { REQUEST } from '@nestjs/core';
import { Inject } from '@nestjs/common';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService, @Inject(REQUEST) private req: any) {}

  /**
   * Create new task
   * @param data 
   * @returns 
   */
  async createTask(data: CreateTaskDto) {
    // Ensure that task_name and task_description are provided
    if (!data.task_name || !data.task_description) {
      throw new Error('task_name and task_description are required');
    }

    data.id_user = this.req.user.id;
    const createData = await this.prisma.tasks.create({
      data: data,
    });
    
    return {
      statusCode: 200,
      data: createData,
    };
  }

  /**
   * Get All task
   * @returns 
   */
  async getAllTask() {
    const dataTask = await this.prisma.tasks.findMany({
      where:{
        id_user: this.req.user.id
      },
      include:{
        user:{
          select:{
            id: true,
            name: true,
            avatar: true,
            email: true
          }
        }
      }
    });
    return {
      statusCode: 200,
      data: dataTask,
    };
  }

  /**
   * Get task by ID
   * @param task_id 
   * @returns 
   */
  async getTaskById(task_id: number) {
    const dataTask = await this.prisma.tasks.findFirst({
      where: {
        id: task_id,
        id_user: this.req.user.id
      },
    });
    return {
      statusCode: 200,
      data: dataTask,
    };
  }

  /**
   * update task by ID
   * @param task_id 
   * @param data 
   * @returns 
   */
  async updateTaskById(task_id: number, data: UpdateTaskDto) {
    data.id_user = this.req.user.id;
    const updateTask = await this.prisma.tasks.update({
      where: {
        id: task_id,
      },
      data: data,
    });
    return {
      statusCode: 200,
      data: updateTask,
    };
  }

  /**
   * delete a task by ID
   * @param task_id 
   * @returns 
   */
  async deleteTaskById(task_id: number) {
    const deleteTask = await this.prisma.tasks.delete({
      where: {
        id: task_id,
      },
    });
    return {
      statusCode: 200,
      data: deleteTask,
      message: 'Sukses delete data',
    };
  }
}