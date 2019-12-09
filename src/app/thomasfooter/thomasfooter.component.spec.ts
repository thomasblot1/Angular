import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThomasfooterComponent } from './thomasfooter.component';

describe('ThomasfooterComponent', () => {
  let component: ThomasfooterComponent;
  let fixture: ComponentFixture<ThomasfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThomasfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThomasfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
