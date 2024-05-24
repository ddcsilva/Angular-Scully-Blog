import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtigosRoutingModule } from './artigos-routing.module';
import { ArtigosComponent } from './artigos.component';


@NgModule({
  declarations: [
    ArtigosComponent
  ],
  imports: [
    CommonModule,
    ArtigosRoutingModule
  ]
})
export class ArtigosModule { }
