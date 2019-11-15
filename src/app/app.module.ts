import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { JobComponent } from './job/job.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ListJobsComponent,
    JobComponent,
    ListNewsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
