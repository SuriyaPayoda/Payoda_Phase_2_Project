import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUserdetailpopComponent } from './c-userdetailpop.component';

describe('CUserdetailpopComponent', () => {
  let component: CUserdetailpopComponent;
  let fixture: ComponentFixture<CUserdetailpopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CUserdetailpopComponent]
    });
    fixture = TestBed.createComponent(CUserdetailpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
