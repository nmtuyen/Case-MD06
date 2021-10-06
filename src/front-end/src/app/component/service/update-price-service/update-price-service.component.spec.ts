import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePriceServiceComponent } from './update-price-service.component';

describe('UpdatePriceServiceComponent', () => {
  let component: UpdatePriceServiceComponent;
  let fixture: ComponentFixture<UpdatePriceServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePriceServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePriceServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
