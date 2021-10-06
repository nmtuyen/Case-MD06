import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConficationComponent } from './confication.component';

describe('ConficationComponent', () => {
  let component: ConficationComponent;
  let fixture: ComponentFixture<ConficationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConficationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
