import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[backgroundStyle]"
})
export class BackgroupStyleDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    (this.elementRef.nativeElement as HTMLElement).style.backgroundColor =
      "blue";
  }
}
