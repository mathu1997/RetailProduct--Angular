import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAddedSuccessfullyComponent } from './rating-added-successfully.component';

describe('RatingAddedSuccessfullyComponent', () => {
  let component: RatingAddedSuccessfullyComponent;
  let fixture: ComponentFixture<RatingAddedSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingAddedSuccessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingAddedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
