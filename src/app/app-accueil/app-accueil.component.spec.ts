import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAccueilComponent } from './app-accueil.component';

describe('AppAccueilComponent', () => {
  let component: AppAccueilComponent;
  let fixture: ComponentFixture<AppAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
