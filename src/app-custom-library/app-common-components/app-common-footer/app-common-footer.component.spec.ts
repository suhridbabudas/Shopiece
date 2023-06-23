import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCommonFooterComponent } from './app-common-footer.component';

describe('AppCommonFooterComponent', () => {
  let component: AppCommonFooterComponent;
  let fixture: ComponentFixture<AppCommonFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCommonFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCommonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
