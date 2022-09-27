import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@edify-technos/api-interfaces';

@Component({
  selector: 'edify-technos-our-colony-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
