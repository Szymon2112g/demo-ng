import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './list-users/list-users.component';
import {UserComponent} from './user/user.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ListJobsComponent} from './list-jobs/list-jobs.component';
import {JobComponent} from './job/job.component';
import {ListNewsComponent} from './list-news/list-news.component';
import {NewsComponent} from './news/news.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'jpa', component: ListUsersComponent},
  { path: 'user/:id', component: UserComponent},
  { path: 'hibernate', component: ListJobsComponent},
  { path: 'job/:id', component: JobComponent},
  { path: 'mongodb', component: ListNewsComponent},
  { path: 'news/:id', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
