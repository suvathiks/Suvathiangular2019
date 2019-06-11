import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApitodoComponent } from './apitodo.component';

describe('ApitodoComponent', () => {
  let component: ApitodoComponent;
  let fixture: ComponentFixture<ApitodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApitodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApitodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
