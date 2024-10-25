import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { task, type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input() name? : string;
  // @Input() userId : string | undefined;
  // @Input() name : string | undefined;
  @Input({required:true}) userId!: string;
  @Input({required:true}) name!: string;
  isAddingTask = false;


  constructor(private tasksService : TasksService) {
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    // this.tasks.push({
    //   id: new Date().getTime().toString(),
    //   title: taskData.title,
    //   summary: taskData.summary,
    //   dueDate: taskData.date,
    //   userId: this.userId ?? '',
    // });

    this.tasksService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }
}
