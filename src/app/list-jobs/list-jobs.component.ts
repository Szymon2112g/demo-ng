import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BasicDataService, Job} from '../service/basic-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {

  jobs: Job[];

  constructor(
    private basicData: BasicDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.basicData.getAllJobs().subscribe(
      response => {
        this.jobs = response;
      }
    );
  }

  deleteJob(id) {
    this.basicData.deleteJob(id).subscribe(
      response => {
        this.getAll();
      }
    );
  }

  updateJob(id) {
    this.router.navigate(['job', id]);
  }

  createJob() {
    this.router.navigate(['job', -1]);
  }


}
