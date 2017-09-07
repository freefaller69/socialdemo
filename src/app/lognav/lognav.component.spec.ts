import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LognavComponent } from './lognav.component';

describe('LognavComponent', () => {
  let component: LognavComponent;
  let fixture: ComponentFixture<LognavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LognavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LognavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
