import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAdminPageComponent } from './rent-admin-page.component';

describe('RentAdminPageComponent', () => {
  let component: RentAdminPageComponent;
  let fixture: ComponentFixture<RentAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
