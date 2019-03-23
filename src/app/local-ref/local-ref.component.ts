import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-local-ref',
  templateUrl: './local-ref.component.html',
  styleUrls: ['./local-ref.component.css']
})
export class LocalRefComponent implements OnInit {
 @ViewChild('elementRefResult')elementRefResult:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  displayedResult = ''
  displayedElementRefResult = ''
  changeResult(result:HTMLInputElement){
    this.displayedResult = result.value;
  }
  getElementRefResult(){
    this.displayedElementRefResult = this.elementRefResult.nativeElement.value;
  }
}
