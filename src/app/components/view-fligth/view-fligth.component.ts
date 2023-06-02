import { Component, OnInit, Input } from '@angular/core';
import { Journey } from 'src/app/models/Journey.model';

@Component({
  selector: 'app-view-fligth',
  templateUrl: './view-fligth.component.html',
  styleUrls: ['./view-fligth.component.scss']
})
export class ViewFligthComponent implements OnInit {

  @Input() journey : Journey = new Journey
  constructor() { }

  ngOnInit(): void {
     console.log("llego",this.journey)
  }

  

}
