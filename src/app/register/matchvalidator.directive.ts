import {Attribute, Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appMatchvalidator][formControlName],[appMatchvalidator][formControl],[appMatchvalidator][ngModel]',
  providers:[{provide: NG_VALIDATORS, useExisting: MatchValidatorDirective, multi: true}]
})
export class MatchValidatorDirective implements Validator{

  constructor(@Attribute('appMatchvalidator') public appMatchvalidator: string) { }

  validate(control: AbstractControl): ValidationErrors | null {
    // self value (e.g. retype password)
    let v = control.value;
    console.log(v)
    // control value (e.g. password)
    //confirmpassword--->form--> get password
    let e = control.root.get(this.appMatchvalidator);
    console.log(e);
    // value not equal
    if (e && v !== e.value) return {
      validateEqual: false
    }
    return null;
  }

}
