import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActionListComponent } from './action-list.component';
import { ActionEditComponent } from './action-edit/action-edit.component';

@NgModule({
  declarations: [
    ActionListComponent,
    ActionEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ActionListModule {}
