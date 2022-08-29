import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyMoRoutingModule } from './lazy-mo-routing.module';
import { TwoComponent } from './two.component';

@NgModule({
  declarations: [
    TwoComponent
  ],
  imports: [
    CommonModule,
    LazyMoRoutingModule
  ]
})
export class LazyMoModule { }
