import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdetailpopComponent } from './cdetailpop.component';

describe('CdetailpopComponent', () => {
  let component: CdetailpopComponent;
  let fixture: ComponentFixture<CdetailpopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdetailpopComponent]
    });
    fixture = TestBed.createComponent(CdetailpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
