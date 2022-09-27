import { Component } from '@angular/core';
import { AppRoutes } from '../../../core/constants/routes';


@Component({
  selector: 'edify-technos-our-colony-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
  readonly AppRoutes = AppRoutes;

  constructor() {}

  
}
