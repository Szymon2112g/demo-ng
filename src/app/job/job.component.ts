import { Component, OnInit } from '@angular/core';
import {BasicDataService, Job} from '../service/basic-data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  id: number;
  job: Job;
  welcomeMessage: string;

  constructor(
    private basicService: BasicDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.job = new Job(this.id , '', '', 0);

    this.welcomeMessage = 'Create new job';

    if(this.id != -1) {
      this.welcomeMessage = 'Update job';

      this.basicService.getSingleJob(this.id)
        .subscribe(
          data => this.job = data
        );
    }
  }

  saveJob() {
    if(this.id == -1) {
      this.basicService.createJob(this.job)
        .subscribe(
          data => {
            this.router.navigate(['hibernate']);
          }
        );
    } else {
      this.basicService.updateJob(this.id, this.job)
        .subscribe(
          data => {
            this.router.navigate(['hibernate']);
          }
        );
    }
  }
}
