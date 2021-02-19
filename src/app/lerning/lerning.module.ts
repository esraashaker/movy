import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LerningRoutingModule } from './lerning-routing.module';
import { FullstakComponent } from './fullstak/fullstak.component';
import { FullstackComponent } from './fullstack/fullstack.component';


@NgModule({
  declarations: [FullstakComponent, FullstackComponent],
  imports: [
    CommonModule,
    LerningRoutingModule
  ]
})
export class LerningModule { }
