import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCCDVComponent } from './list-ccdv.component';

describe('ListCCDVComponent', () => {
  let component: ListCCDVComponent;
  let fixture: ComponentFixture<ListCCDVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCCDVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCCDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
