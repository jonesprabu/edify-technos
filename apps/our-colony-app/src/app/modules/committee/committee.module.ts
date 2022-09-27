import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitteeComponent } from './components/committee/committee.component';
import { CommitteRoutingModule } from './committe-routing.module';

@NgModule({
  imports: [CommonModule, CommitteRoutingModule],
  declarations: [CommitteeComponent],
})
export class CommitteeModule {}
