import { ReactiveFormsModule } from "@angular/forms";
import { DropdownDirective } from "./dropdown.directive";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DropdownDirective],
  imports: [CommonModule],
  exports: [CommonModule, DropdownDirective, ReactiveFormsModule]
})
export class SharedModule {}
