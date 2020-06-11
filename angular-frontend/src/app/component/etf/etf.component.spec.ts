import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtfComponent } from './etf.component';

describe('EtfComponent', () => {
  let component: EtfComponent;
  let fixture: ComponentFixture<EtfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
