import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class = "container">
  <h1>To Do List<br>{{month}}/{{day}}/{{year}}</h1>
  <h2> {{currentFocus}}</h2>
  <ul>
    <li *ngFor="let task of tasks">{{task.description}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework'
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] =[
    new Task("Finish weekend Angular homework for Epicodus"),
    new Task("Finish cleaning my room"),
    new Task("Finish working on million dollar idea"),
    new Task("Finish finding my soul"),];
  }

export class Task {
  public done: boolean = false;
  constructor(public description:string){ }

}
