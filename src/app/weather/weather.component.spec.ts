import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressFormComponent } from '../address-form/address-form.component';
import { AddressComponent } from '../address/address.component';
import { ForecastComponent } from '../forecast/forecast.component';

import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        WeatherComponent,
        ForecastComponent,
        AddressComponent,
        AddressFormComponent
       ],
       imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
