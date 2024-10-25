import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private tasks = dummyTasks;

  getUserTasks(userId: string){
    return this.tasks.filter((task) => {
      return task.userId === userId;
    });
  }

  addTask(taskData: NewTaskData, userId: string){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: userId ?? '',
    });
    this.saveTasks();
  }

  removeTask(id: string){
    this.tasks = this.tasks.filter((task) => {
      return task.id !== id;
    });
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
