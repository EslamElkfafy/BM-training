import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  task: Task = { id: 0, title: '', description: '' };

  constructor(private taskService: TaskService, private router: Router) { }

  addTask() {
    this.taskService.addTask(this.task);
    this.router.navigate(['/']);
  }
}
