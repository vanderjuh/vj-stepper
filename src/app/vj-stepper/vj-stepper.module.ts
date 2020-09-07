import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { VjStepperComponent } from './vj-stepper.component';

@NgModule({
  declarations: [
    VjStepperComponent
  ],
  imports: [
    CommonModule,
    CdkStepperModule,
    MatRippleModule,
    MatIconModule
  ],
  exports: [
    CdkStepperModule,
    VjStepperComponent
  ]
})
export class VjStepperModule { }
