import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  isError(control: AbstractControl): boolean {
    return (control && control.invalid && (control.touched || control.dirty));
  }
}
