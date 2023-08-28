import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFilterComponent } from './c-filter.component';

describe('CFilterComponent', () => {
  let component: CFilterComponent;
  let fixture: ComponentFixture<CFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CFilterComponent]
    });
    fixture = TestBed.createComponent(CFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
