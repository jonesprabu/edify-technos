import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayRoutingModule } from './pay-routing.module';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { PaymentDueCardComponent } from './components/payment-due-card/payment-due-card.component';
import { PaymentMonthlyCardComponent } from './components/payment-monthly-card/payment-monthly-card.component';

@NgModule({
  imports: [CommonModule, PayRoutingModule],
  declarations: [PaymentPageComponent, PaymentDueCardComponent, PaymentMonthlyCardComponent],
})
export class PayModule {}
