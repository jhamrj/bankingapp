import {Attribute, Directive} from '@angular/core';
import {AbstractControl, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appMatchvalidator]'
})
export class MatchValidatorDirective implements Validator{

  constructor(@Attribute('appMatchvalidator') public appMatchvalidator: string) { }

  validate(control: AbstractControl): ValidationErrors | null {
    // self value (e.g. retype password)
    let v = control.value;

    // control value (e.g. password)
    //confirmpassword--->form--> get password
    let e = control.root.get(this.appMatchvalidator);

    // value not equal
    if (e && v !== e.value) return {
      validateEqual: false
    }
    return null;
  }

}
