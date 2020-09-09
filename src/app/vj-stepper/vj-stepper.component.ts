import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'vj-stepper',
  templateUrl: './vj-stepper.component.html',
  styleUrls: ['./vj-stepper.component.scss'],
  providers: [
    { provide: CdkStepper, useExisting: VjStepperComponent }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VjStepperComponent extends CdkStepper {

  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';

  // dir: Directionality, _changeDetectorRef: ChangeDetectorRef, _elementRef?: ElementRef<HTMLElement>, _document?: any

  constructor(
    private cdRef: ChangeDetectorRef,
    private directionality: Directionality,
  ) {
    super(directionality, cdRef, undefined);
  }

  onClick(index: number): void {
    this.selectedIndex = index;
    this.cdRef.markForCheck();
    console.log(this.selectedIndex)
  }

}
