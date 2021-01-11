import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingPageComponent } from './financing-page.component';

describe('FinancingPageComponent', () => {
  let component: FinancingPageComponent;
  let fixture: ComponentFixture<FinancingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
