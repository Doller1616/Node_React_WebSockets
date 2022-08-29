import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyMoRoutingModule } from './lazy-mo-routing.module';
import { TwoComponent } from './two.component';
import { PokemonCardView } from '../common/pokemon-cardview'

@NgModule({
  declarations: [
    TwoComponent,
    PokemonCardView
  ],
  imports: [
    CommonModule,
    LazyMoRoutingModule
  ]
})
export class LazyMoModule { }
