import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from './task-list/task-list.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {AppComponent} from './app.component';
import {PageNotFoundComponentComponent} from './page-not-found-component/page-not-found-component.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TaskFormComponent} from './task-form/task-form.component';

const routes: Routes = [
  { path: 'Task', component:TaskListComponent },
  { path: 'Todo', component: TodoListComponent },
  { path: 'EditTodo', component: TodoFormComponent },
  { path: 'EditTask', component: TaskFormComponent },
  { path: '', component: AppComponent},
  { path: 'not-found', component: PageNotFoundComponentComponent},
  { path: '**', redirectTo:'not-found'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
