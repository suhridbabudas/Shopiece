import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductSubTypeComponent } from './user-product-sub-type.component';

describe('UserProductSubTypeComponent', () => {
  let component: UserProductSubTypeComponent;
  let fixture: ComponentFixture<UserProductSubTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductSubTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProductSubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
