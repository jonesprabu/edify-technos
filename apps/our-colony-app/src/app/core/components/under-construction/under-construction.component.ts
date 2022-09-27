import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edify-technos-our-colony-app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css'],
})
export class UnderConstructionComponent {
  
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      const slugData = params['slug'];
      

      const URL = 'https://testexample.com/pdf/abc/';
      console.log(URL + slugData);

      // setTimeout(() => {
      //   if (slugData) {
      //     window.location.href = URL + slugData;
      //   } else {
      //     window.location.href = 'https://testexample.com/';
      //   }
      // }, 0);
    });
  }
}
