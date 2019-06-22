import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { ApitodoComponent } from './apitodo/apitodo.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'apitodo', component: ApitodoComponent },
  { path: 'stopwatch', component: StopwatchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
