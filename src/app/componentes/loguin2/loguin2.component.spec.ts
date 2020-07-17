import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loguin2Component } from './loguin2.component';

describe('Loguin2Component', () => {
  let component: Loguin2Component;
  let fixture: ComponentFixture<Loguin2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loguin2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loguin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
