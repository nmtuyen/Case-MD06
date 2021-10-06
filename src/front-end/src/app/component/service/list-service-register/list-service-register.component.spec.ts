import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceRegisterComponent } from './list-service-register.component';

describe('ListServiceRegisterComponent', () => {
  let component: ListServiceRegisterComponent;
  let fixture: ComponentFixture<ListServiceRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServiceRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
