// @ts-ignore
import { Task } from '../../interfaces/task';
import { trigger, transition, style, animate } from '@angular/animations';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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

  TaskForm;
  tasks;
  Name: string;
  TaskId: number;
  owner_id: number;
  _httpClient: HttpClient;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.TaskId = 4;
    this.Name = ""; //mettre nom todo ic
    this.tasks= [
      //début de json
      {
        'id': 1,
        'Name': 'Finish Angular Screencast',
        'editing': false,
        'date' : '19/09/2019',
        'description': 'Job for the web architecture',
        'priority' : 5,
        'todo': 'work',
        'State' : 'completed'
      },
      {
        'id': 2,
        'Name': 'Take over world',
        'editing': false,
        'date' : '29/09/2019'
      },
      {
        'id': 3,
        'Name': 'One more thing',
        'editing': false,
        'date' : '25/10/2019'
      },
    ];//this.getTasksFromAPI();
  }

  createTaskForm(){
    this.TaskForm = this.formBuilder.group({
      name:'',
      Description:'',
      Priority :'',
      Todo:''
    });

  }

  getTasks(){
    this.tasks = this._httpClient.get('http://127.0.0.1:8000/api/task/getTasks');
  }

  getTask(name) {
    this.tasks = this._httpClient.get('http://127.0.0.1:8000/api/task/getTask/' + name.toString());
  }

  delete_task(name): void {
    this._httpClient.get('http://127.0.0.1:8000/api/task/delete/'+name.toString());
    this.getTasks();
  }
  modifying(Name,Description,Priority, State){// All the args must be strings
    this.TaskForm = this.formBuilder.group({
      name: Name,
      Description: Description,
      Priority : Priority,
      State: State
    });
  }
  updateTask() {
    this._httpClient.put('http://127.0.0.1:8000/api/task/edit/' + this.tasks.Name.toString(), this.tasks.todo.toString()+ this.tasks.Name.toString()+  this.tasks.Description.toString() + this.tasks.Priority.toString());
    this.tasks.State.toString();
  }
  edit(name): void {
    this.getTask(name);
    this.modifying(this.tasks.Name, this.tasks.Description, this.tasks.Priority, this.tasks.State);
    this.updateTask();
    this.getTasks();
    return;
  }
}
