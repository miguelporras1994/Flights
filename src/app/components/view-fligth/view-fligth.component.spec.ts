import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFligthComponent } from './view-fligth.component';

describe('ViewFligthComponent', () => {
  let component: ViewFligthComponent;
  let fixture: ComponentFixture<ViewFligthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFligthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFligthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
