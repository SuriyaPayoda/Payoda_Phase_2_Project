import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardstestComponent } from './cardstest.component';

describe('CardstestComponent', () => {
  let component: CardstestComponent;
  let fixture: ComponentFixture<CardstestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardstestComponent]
    });
    fixture = TestBed.createComponent(CardstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
