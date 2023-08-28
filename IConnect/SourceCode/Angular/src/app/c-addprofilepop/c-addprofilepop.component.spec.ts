import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAddprofilepopComponent } from './c-addprofilepop.component';

describe('CAddprofilepopComponent', () => {
  let component: CAddprofilepopComponent;
  let fixture: ComponentFixture<CAddprofilepopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CAddprofilepopComponent]
    });
    fixture = TestBed.createComponent(CAddprofilepopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
