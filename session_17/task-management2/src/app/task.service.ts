import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskId = 0;
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  getTasks() {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task) {
    task.id = ++this.taskId;
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  getTask(id: number) {
    return this.tasks.find(task => task.id === id);
  }

  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.tasksSubject.next(this.tasks);
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);
  }
}
