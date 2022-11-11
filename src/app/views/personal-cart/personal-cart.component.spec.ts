import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCartComponent } from './personal-cart.component';

describe('PersonalCartComponent', () => {
  let component: PersonalCartComponent;
  let fixture: ComponentFixture<PersonalCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
