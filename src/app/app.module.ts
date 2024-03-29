import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutofocusModule } from 'angular-autofocus-fix';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThomasfooterComponent } from './thomasfooter/thomasfooter.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TaskFormComponent } from './task-form/task-form.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavbarComponent,
    ThomasfooterComponent,
    TaskListComponent,
    PageNotFoundComponentComponent,
    TodoFormComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutofocusModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
