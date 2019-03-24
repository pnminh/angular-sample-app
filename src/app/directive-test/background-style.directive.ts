import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[backgroundStyle]"
})
export class BackgroupStyleDirective implements OnInit {
  //should not manipulate elementRef directly, since this works with browser-based app only
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    (this.elementRef.nativeElement as HTMLElement).style.backgroundColor =
      "blue";
  }
}
