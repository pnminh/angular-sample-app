import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[appRepeat]"
})
export class RepeatDirective implements OnInit {
  ngOnInit(): void {
    /* if (this.appRepeat > 0) {
      for (let i = 0; i < this.appRepeat; i++) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    } */
  }
  @Input() set appRepeat(times:number){
    if (times > 0) {
      for (let i = 0; i < times; i++) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
