import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNavComponent } from './c-nav.component';

describe('CNavComponent', () => {
  let component: CNavComponent;
  let fixture: ComponentFixture<CNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CNavComponent]
    });
    fixture = TestBed.createComponent(CNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
