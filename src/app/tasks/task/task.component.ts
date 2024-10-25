import { TasksService } from './../tasks.service';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:task;
  @Output() complete = new EventEmitter<string>();
  // private tasksService = inject(TasksService);

  onCompleteTask(){
    this.complete.emit(this.task.id);
  }

  // onCompleteTask(){
  //   this.tasksService.removeTask(this.task.id);
  // }
}
