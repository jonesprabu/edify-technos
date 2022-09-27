import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMonthlyCardComponent } from './payment-monthly-card.component';

describe('PaymentMonthlyCardComponent', () => {
  let component: PaymentMonthlyCardComponent;
  let fixture: ComponentFixture<PaymentMonthlyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMonthlyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMonthlyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
