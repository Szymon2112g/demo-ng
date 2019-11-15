import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class User {
  constructor(public id: number, public username: string, public point: number, public money: number) {}
}

export class Job {
  constructor(public id: number, public name: string, public describe: string, public money: number) {}
}

export class News {
  constructor(public id: string, public title: string, public text: string, public author: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class BasicDataService {

  constructor(
      private http: HttpClient
  ) { }

  getAllUsers() {
    return this.http.get<User[]>('http://localhost:8080/userlist');
  }

  deleteUser(id) {
    return this.http.delete(`http://localhost:8080/delete/${id}`);
  }

  getSingleUser(id) {
    return this.http.get<User>(`http://localhost:8080/getsingleuser/${id}`);
  }

  updateUser(id, user) {
    return this.http.put<User>(`http://localhost:8080/saveuser/${id}`, user);
  }

  createUser(user) {
    return this.http.post(`http://localhost:8080/createuser`, user);
  }


  getAllJobs() {
    return this.http.get<Job[]>('http://localhost:8080/hibernate/joblist');
  }

  deleteJob(id) {
    return this.http.delete(`http://localhost:8080/hibernate/deletejob/${id}`);
  }

  getSingleJob(id) {
    return this.http.get<Job>(`http://localhost:8080/hibernate/getsinglejob/${id}`);
  }

  updateJob(id, job) {
    return this.http.put<Job>(`http://localhost:8080/hibernate/updatejob/${id}`, job);
  }

  createJob(job) {
    return this.http.post(`http://localhost:8080/hibernate/createjob`, job);
  }

  getAllNews() {
    return this.http.get<News[]>('http://localhost:8080//mongodb/getall');
  }

  deleteNews(id) {
    return this.http.delete(`http://localhost:8080/mongodb/delete/${id}`);
  }

  getSingleNews(id) {
    return this.http.get<News>(`http://localhost:8080/mongodb/getsinglenews/${id}`);
  }

  updateNews(id, news) {
    return this.http.put<News>(`http://localhost:8080/mongodb/updatenews/${id}`, news);
  }

  createNews(news) {
    return this.http.post(`http://localhost:8080/mongodb/createNews/`, news);
  }
}
