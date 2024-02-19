import { AbstractControl, ValidatorFn } from '@angular/forms';

export function rangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    // "is Not a Number" şeklindedir. Bu fonksiyon, verilen değerin bir sayı olup olmadığını kontrol eder.
    if (isNaN(value) || value < min || value > max) {
      return { range: true }; // Validation failed
    }

    return null; // Validation passed
  };
}
