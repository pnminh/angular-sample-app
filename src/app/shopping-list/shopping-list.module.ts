import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';


@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [SharedModule],
  exports: []
})
export class ShoppingListModule {}
