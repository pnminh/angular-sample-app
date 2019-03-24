import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appAdvancedBackgroundStyle]"
})
export class AdvancedBackgroundStyleDirective implements OnInit {
  //alias for the directive name
  @Input('appAdvancedBackgroundStyle')textHighLightColor;
  @Input('defaultColor')textDefaultColor:string;
  @HostBinding('style.color')textColor:string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "blue"
    );
    this.textColor = this.textDefaultColor;
  }
  @HostListener('mouseover')mouseover(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "red"
    );
    this.textColor = this.textHighLightColor;
  }
  @HostListener('mouseleave')mouseleave(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "blue"
    );
    this.textColor = this.textDefaultColor;
  }
}
