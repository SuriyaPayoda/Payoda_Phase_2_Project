import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddetailtestComponent } from './carddetailtest.component';

describe('CarddetailtestComponent', () => {
  let component: CarddetailtestComponent;
  let fixture: ComponentFixture<CarddetailtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarddetailtestComponent]
    });
    fixture = TestBed.createComponent(CarddetailtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
