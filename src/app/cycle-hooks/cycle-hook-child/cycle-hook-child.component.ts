import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-cycle-hook-child",
  templateUrl: "./cycle-hook-child.component.html",
  styleUrls: ["./cycle-hook-child.component.css"]
})
export class CycleHookChildComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit {
  @Input() description: string;
  @Input() title: string;
  @Output() titleChange: EventEmitter<string> = new EventEmitter();
  isEdit = false;
  isTitleEdit = false;
  buttonStatus = "Edit Description";
  buttonTitleStatus = "Edit Title";
  constructor() {
    console.log("inside constructor");
  }

  ngOnInit() {
    console.log(
      "inside onInit,contentChildElement:" +
        this.contentChildElement.nativeElement.textContent
    );
  }
  /**
   * This only works when the input gets changed from outside
   * not when it gets changed with ngModel
   * e.g: only get called when tittle changes, not description
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log("inside onChanges" + JSON.stringify(changes));
  }
  ngAfterViewInit(): void {
    console.log("inside ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("inside ngAfterViewChecked");
  }
  @ContentChild("contentChildElement") contentChildElement: ElementRef;
  //this is called each time ngDoCheck is called
  ngAfterContentChecked(): void {
    console.log(
      "inside ngAfterContentChecked, contentChildElement:" +
        (this.contentChildElement.nativeElement as HTMLElement).innerText
    );
  }
  ngAfterContentInit(): void {
    console.log(
      "inside ngAfterContentInit, contentChildElement:" +
        (this.contentChildElement.nativeElement as HTMLElement).innerText
    );
    setTimeout(() =>
      console.log(
        "inside ngAfterContentInit, contentChildElement:" +
          (this.contentChildElement.nativeElement as HTMLElement).innerText
      )
    );
  }
  ngDoCheck(): void {
    console.log("inside ngDoCheck");
  }
  ngOnDestroy(): void {
    console.log("inside ngOnDestroy");
  }
  onChangeDescription() {
    this.isEdit = !this.isEdit;
    this.buttonStatus = this.isEdit ? "Done" : "Edit Description";
  }
  onChangeTitle() {
    this.isTitleEdit = !this.isTitleEdit;
    this.buttonTitleStatus = this.isTitleEdit ? "Done" : "Edit Title";
  }
  changeTitle(event: Event) {
    this.titleChange.emit((event.target as HTMLInputElement).value);
  }
}
