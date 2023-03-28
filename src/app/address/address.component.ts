import { Component, Input } from '@angular/core';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  @Input() formattedAddress: string = '';
}
