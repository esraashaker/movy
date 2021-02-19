import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearingRoutingModule } from './learing-routing.module';
import { FullstackComponent } from './fullstack/fullstack.component';


@NgModule({
  declarations: [FullstackComponent],
  imports: [
    CommonModule,
    LearingRoutingModule
  ]
})
export class LearingModule { }
