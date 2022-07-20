import { Component, OnInit } from '@angular/core';
import { ViewtypeSegmentService } from './viewtype-segment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewtype-segment',
  templateUrl: './viewtype-segment.component.html',
  styleUrls: ['./viewtype-segment.component.scss'],
})
export class ViewtypeSegmentComponent implements OnInit {

  constructor(
    public router: Router,
    public viewtypeSegmentService: ViewtypeSegmentService
  ) { }

  ngOnInit() {}

  goToList() {
    this.viewtypeSegmentService.showMap = false;
    this.router.navigate(['home', 'adventures']);
  }

  goToMap() {
    this.viewtypeSegmentService.showMap = true;
    this.router.navigate(['home', 'map']);
  }
}
