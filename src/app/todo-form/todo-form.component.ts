import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  TodoForm : FormGroup;

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.TodoForm = this.formBuilder.group({
      Name: ''
    });
  }


}
