import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEntertainmentComponent } from './home-entertainment.component';

describe('HomeEntertainmentComponent', () => {
  let component: HomeEntertainmentComponent;
  let fixture: ComponentFixture<HomeEntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEntertainmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
