import { Component } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  displayAddress: string = '';

  public formatAddress(address: Address) {
    this.displayAddress = address.street + '\n' + address.city + ', ' + address.state + ' ' + address.zipcode;
  }
}
