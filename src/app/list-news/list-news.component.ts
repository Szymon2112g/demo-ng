import { Component, OnInit } from '@angular/core';
import {BasicDataService, News} from '../service/basic-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  news: News[]

  constructor(
    private basicData: BasicDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.basicData.getAllNews().subscribe(
      response => {
        this.news = response;
      }
    );
  }

  deleteNews(id) {
    this.basicData.deleteNews(id).subscribe(
      response => {
        this.getAll();
      }
    );
  }

  updateNews(id) {
    this.router.navigate(['news', id]);
  }

  createNews(id) {
    this.router.navigate(['news', '-1']);
  }

}
