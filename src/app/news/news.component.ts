import { Component, OnInit } from '@angular/core';
import {BasicDataService, News} from '../service/basic-data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  id: string;
  news: News;
  welcomeMessage: String;


  constructor(
    private basicService: BasicDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.news = new News(this.id, '','','');

    this.welcomeMessage = 'Create new news';

    if(this.id != '-1') {
      this.welcomeMessage = 'update news';

      this.basicService.getSingleNews(this.id)
        .subscribe(
          data => this.news = data
        );
    }

  }

  saveNews() {
    if(this.id == '-1') {
      this.news.id = '';
      this.basicService.createNews(this.news)
        .subscribe(
          data => {
            this.router.navigate(['mongodb']);
          }
        );
    } else {
      this.basicService.updateNews(this.id, this.news)
        .subscribe(
          data => {
            this.router.navigate(['mongodb']);
          }
        );
    }
  }

}
