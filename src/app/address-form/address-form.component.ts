import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  constructor(private fb: FormBuilder) {}

  // Uses FormBuilder in case we later want to add 
  // Syntax validation and international addresses
  addressForm = this.fb.group({
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipcode: [null, Validators.required]
  });

  public onSubmit() {
    console.warn(this.addressForm.value);
    this.addressForm.reset();
  }
}
