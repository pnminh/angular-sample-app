import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-ref',
  templateUrl: './ng-content-ref.component.html',
  styleUrls: ['./ng-content-ref.component.css']
})
export class NgContentRefComponent implements OnInit {
  ngContentOutput:string;
  constructor() { }

  ngOnInit() {
  }
  getOutput(event:Event){
    this.ngContentOutput = (event.target as HTMLInputElement).value
  }
}
