import { FormControl } from '@angular/forms';

export class CustomValidators {

    static validateRequired(c: FormControl) {
        if (c.value.length === 0) {
          return {required: true};
        } else {
          return null;
        }
      }

    /*  static maxlength(c: FormControl) {
        if (c.value.length === 3) {
          return {maxLength: 3};
        } else {
          return null;
        }
      } */

}
