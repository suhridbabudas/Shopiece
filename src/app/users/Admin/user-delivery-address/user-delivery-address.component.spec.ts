import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeliveryAddressComponent } from './user-delivery-address.component';

describe('UserDeliveryAddressComponent', () => {
  let component: UserDeliveryAddressComponent;
  let fixture: ComponentFixture<UserDeliveryAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeliveryAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeliveryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
