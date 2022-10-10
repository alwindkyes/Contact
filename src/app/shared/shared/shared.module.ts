import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeComponent } from './three/three.component';



@NgModule({
  declarations: [
    ThreeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThreeComponent
  ]
})
export class SharedModule { }
