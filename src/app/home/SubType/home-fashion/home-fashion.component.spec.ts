import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFashionComponent } from './home-fashion.component';

describe('HomeFashionComponent', () => {
  let component: HomeFashionComponent;
  let fixture: ComponentFixture<HomeFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
