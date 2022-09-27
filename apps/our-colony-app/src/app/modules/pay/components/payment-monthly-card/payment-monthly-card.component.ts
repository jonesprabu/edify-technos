import { Component, Input, OnInit } from '@angular/core';
import { MonthlyPaymentDetails } from '../../interfaces/paymentMonthlyDetails';

@Component({
  selector: 'edify-technos-payment-monthly-card',
  templateUrl: './payment-monthly-card.component.html',
  styleUrls: ['./payment-monthly-card.component.css']
})
export class PaymentMonthlyCardComponent {

  @Input() monthlyPaymentDetails!: MonthlyPaymentDetails;

  constructor() { }

  
}
