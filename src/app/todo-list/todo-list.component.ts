import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Todo } from '../../interfaces/todo';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient} from '@angular/common/http';

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
  todos: Todo[];
  Name: string;
  TodoId: number;
  owner_id: number;
  _httpClient: HttpClient;


  constructor() {}

  ngOnInit() {
    this.TodoId = 4;
    this.Name = ""; //mettre nom todo ici

    this.todos = [
      //début de json
      {
        'id': 1,
        'Name': 'Finish Angular Screencast',
        'editing': false,
      },
      {
        'id': 2,
        'Name': 'Take over world',
        'editing': false,
      },
      {
        'id': 3,
        'Name': 'One more thing',
        'editing': false,
      },{
        'id': 4,
        'Name': 'One more thing',
        'editing': false,
      }
      //fin de json ici
      ,
    ];
  }


  select_todo(name): void {

    for (let element in this.todos){
      alert(this.todos[element].Name);
    }
  }

  edit(): void{

  }
  addTodo(): void {
    if (this.Name.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.TodoId,
      title: this.Name,
      completed: false,
      editing: false
    })

    this.Name = '';
    this.TodoId++;
  }

  editTodo(todo: Todo): void {
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if (todo.title.trim().length === 0) {
    }
    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.editing = false;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  checkAllTodos(): void {
    this.todos.forEach(todo => todo.completed = (<HTMLInputElement>event.target).checked);
  }

  anyRemaining(): boolean {
    return this.remaining() !== 0;
  }
}
