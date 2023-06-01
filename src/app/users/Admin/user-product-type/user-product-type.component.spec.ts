import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductTypeComponent } from './user-product-type.component';

describe('UserProductTypeComponent', () => {
  let component: UserProductTypeComponent;
  let fixture: ComponentFixture<UserProductTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
