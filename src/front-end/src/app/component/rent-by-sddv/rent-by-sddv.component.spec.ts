import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentBySDDVComponent } from './rent-by-sddv.component';

describe('RentBySDDVComponent', () => {
  let component: RentBySDDVComponent;
  let fixture: ComponentFixture<RentBySDDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentBySDDVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentBySDDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
