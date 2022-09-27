import { Component, OnInit } from '@angular/core';
import { MonthlyPaymentDetails } from '../../interfaces/paymentMonthlyDetails';

@Component({
  selector: 'edify-technos-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss'],
})
export class PaymentPageComponent {

 

  paymentData: MonthlyPaymentDetails[] = [
    {
      month: "August",
      year: 2022,
      dueDate: 15,
      amt: 2350,
      paymentStatusCode: 1,
      paymentStatusMsg: "paid"
    },
    {
      month: "September",
      year: 2022,
      dueDate: 15,
      amt: 2350,
      paymentStatusCode: 1,
      paymentStatusMsg: "paid"
    }
  ]


  constructor() {}
}
