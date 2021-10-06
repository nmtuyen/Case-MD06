import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFromUserComponent } from './request-from-user.component';

describe('RequestFromUserComponent', () => {
  let component: RequestFromUserComponent;
  let fixture: ComponentFixture<RequestFromUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestFromUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestFromUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
