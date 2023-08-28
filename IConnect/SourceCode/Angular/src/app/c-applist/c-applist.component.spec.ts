import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CApplistComponent } from './c-applist.component';

describe('CApplistComponent', () => {
  let component: CApplistComponent;
  let fixture: ComponentFixture<CApplistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CApplistComponent]
    });
    fixture = TestBed.createComponent(CApplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
