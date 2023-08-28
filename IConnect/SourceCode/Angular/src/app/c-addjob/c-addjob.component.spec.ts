import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAddjobComponent } from './c-addjob.component';

describe('CAddjobComponent', () => {
  let component: CAddjobComponent;
  let fixture: ComponentFixture<CAddjobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CAddjobComponent]
    });
    fixture = TestBed.createComponent(CAddjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
