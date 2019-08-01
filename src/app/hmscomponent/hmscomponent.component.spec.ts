import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmscomponentComponent } from './hmscomponent.component';

describe('HmscomponentComponent', () => {
  let component: HmscomponentComponent;
  let fixture: ComponentFixture<HmscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
