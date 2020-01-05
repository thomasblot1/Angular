import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Todo } from '../../interfaces/todo';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TaskListComponent} from '../task-list/task-list.component';
const appRoutes: Routes = [
  { path: 'Todo' },
];
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
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
export class TodoListComponent implements OnInit {
  Name: string;
  TodoId: number;
  owner_id: number;
  _httpClient: HttpClient;
  todos;
  TodoForm : FormGroup;
  constructor(private formBuilder : FormBuilder) {}

  ngOnInit() {

    this.initForm();
    this.TodoId = 4;
    this.Name = ""; //mettre nom todo ici
    this.getTodos();
  }
  initForm() {
    this.TodoForm = this.formBuilder.group({
      Name: ''
    });
  }

  getTodos(){
    //this.todos = this._httpClient.get('http://127.0.0.1:8000/Web/api/todo/getTodos');
    this.todos = [{
      id : '1',
      Name : 'To Do For Work'
      },
      {
        id : '2',
        Name : 'To Do For Housework'
      },
      {
        id : '3',
        Name : 'Reminders'
      },
    ];
  }

  getTodo(name) {
    this.todos = this._httpClient.get( + name.toString());
  }



  modifying(name){
    this.TodoForm = this.formBuilder.group({
      name:name
    });

  }

  edit(name): void {
    this.getTodo(name);
    this.modifying(this.todos.Name);
    return;
  }
  addTodo(): void {

  }

  editTodo(name): void {
    this.modifying(name);
  }

  deleteTodo(name): void {

  }

  select_todo(name): void {
    alert(name)
  }


}
