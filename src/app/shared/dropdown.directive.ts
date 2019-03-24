import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective implements OnInit {
  @Input() appDropdown: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener("click") onclick() {
    const nativeElement = this.elementRef.nativeElement;
    if(nativeElement instanceof HTMLElement){
      const dropdownMenuElements = (nativeElement as HTMLElement).getElementsByClassName("dropdown-menu");
      if(dropdownMenuElements != null && dropdownMenuElements.length > 0){
         for (let i=0;i<dropdownMenuElements.length;i++){
           let element = dropdownMenuElements.item(i);
           if(element.classList.contains("show")){
            this.renderer.removeClass(element, "show");
           }else{
            this.renderer.addClass(element, "show");
           }

         }
      }

    }

  }
  ngOnInit(): void {
  }
}
