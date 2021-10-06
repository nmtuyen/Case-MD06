import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentByCCDVComponent } from './rent-by-ccdv.component';

describe('RentByCCDVComponent', () => {
  let component: RentByCCDVComponent;
  let fixture: ComponentFixture<RentByCCDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentByCCDVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentByCCDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
