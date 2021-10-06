import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserToCCDVComponent } from './list-user-to-ccdv.component';

describe('ListUserToCCDVComponent', () => {
  let component: ListUserToCCDVComponent;
  let fixture: ComponentFixture<ListUserToCCDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserToCCDVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserToCCDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
