import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCommonButtonComponent } from './app-common-button.component';

describe('AppCommonButtonComponent', () => {
  let component: AppCommonButtonComponent;
  let fixture: ComponentFixture<AppCommonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCommonButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCommonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
