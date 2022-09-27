import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDueCardComponent } from './payment-due-card.component';

describe('PaymentDueCardComponent', () => {
  let component: PaymentDueCardComponent;
  let fixture: ComponentFixture<PaymentDueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDueCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentDueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
