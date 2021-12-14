import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS } from '@angular/forms';
import { MustMatch } from './must-match.validator';
import { Price } from './product-price.validator';

@Directive({
  selector: '[appProductPrice]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ProductPriceDirective, multi: true }]
})
export class ProductPriceDirective {

  @Input('appProductPrice') appProductPrice: string[] = [];

    validate(formGroup: FormGroup): any {
      return MustMatch(this.appProductPrice[0], this.appProductPrice[1])(formGroup);
    }

}
