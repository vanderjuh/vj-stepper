import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'vj-stepper',
  templateUrl: './vj-stepper.component.html',
  styleUrls: ['./vj-stepper.component.scss'],
  providers: [
    { provide: CdkStepper, useExisting: VjStepperComponent }
  ]
})
export class VjStepperComponent extends CdkStepper {

  onClick(index: number): void {
    this.selectedIndex = index;
  }

}
