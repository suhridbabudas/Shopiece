import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElectronicsComponent } from './home-electronics.component';

describe('HomeElectronicsComponent', () => {
  let component: HomeElectronicsComponent;
  let fixture: ComponentFixture<HomeElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeElectronicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
