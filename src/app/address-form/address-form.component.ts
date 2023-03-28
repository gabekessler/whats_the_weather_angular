import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Address } from '../address';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  model = new Address('', '', '', 0);

  @Output() newAddress = new EventEmitter<Address>();

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
    let params = this.addressForm.value;
    this.model = new Address(params.street!, params.city!, params.state!, params.zipcode!);
    this.newAddress.emit(this.model);
    this.addressForm.reset();
  }
}
