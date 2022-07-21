import { Component, OnInit } from '@angular/core';
import { AdventureService } from '../services/adventure.service';

@Component({
  selector: 'app-in-process',
  templateUrl: './in-process.component.html',
  styleUrls: ['./in-process.component.scss'],
})
export class InProcessComponent implements OnInit {

  constructor(
    public adventureService: AdventureService
  ) { }

  ngOnInit() {}

}
