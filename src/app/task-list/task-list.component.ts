// @ts-ignore
import { Task } from '../../interfaces/task';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0px)'}))
      ]),
      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(30px)' }))
      ]),
    ])
  ]
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  Name: string;
  TaskId: number;
  owner_id: number;
  _httpClient: HttpClient;


  constructor() {}

  ngOnInit() {
    this.TaskId = 4;
    this.Name = ""; //mettre nom todo ici

    this.tasks = [
      //début de json
      {
        'id': 1,
        'todo_id': 'Nom d une tache',
        'Name': 'tache 1',
        'description': 'description 1',
        'date': '2019-10-22',
        'priority': 2,
        'state':1,
        'editing': false,
      },
      {
        'id': 2,
        'todo_id': 'Nom d une tache',
        'Name': 'tache 2',
        'description': 'description 2',
        'date': '2019-10-22',
        'priority': 1,
        'state':1,
        'editing': false,
      },
      {
        'id': 3,
        'todo_id': 'Nom d une tache',
        'Name': 'tache 3',
        'description': 'description 3',
        'date': '2019-10-22',
        'priority': 1,
        'state':1,
        'editing': false,
      },
    ];
  }




  select_task(name): void {
    for (let element in this.tasks){
      alert(this.tasks[element].Name);
    }
  }

  edit(): void{

  }
  addTask(): void {
    if (this.Name.trim().length === 0) {
      return;
    }

    this.tasks.push({
      id: this.TaskId,
      Name: this.Name,
      completed: false,
      editing: false
    })

    this.Name = '';
    this.TaskId++;
  }

  editTask(task: Task): void {

    task.editing = true;
  }

  doneEdit(task: Task): void {
    if (task.title.trim().length === 0) {
    }
    task.editing = false;
  }

  cancelEdit(task: Task): void {
    task.editing = false;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  remaining(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.tasks.filter(task => task.completed).length > 0;
  }

  clearCompleted(): void {
    this.tasks = this.tasks.filter(task => !task.completed);
  }

  checkAlltasks(): void {
    this.tasks.forEach(task => task.completed = (<HTMLInputElement>event.target).checked);
  }

  anyRemaining(): boolean {
    return this.remaining() !== 0;
  }
}
