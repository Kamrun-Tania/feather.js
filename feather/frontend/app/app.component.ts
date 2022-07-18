import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

interface Kafein {
  name: string;
  address: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.full;
  url = 'http://localhost:3030/messages';
  httpData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.callApi();
  }

  callApi() {
    this.http.get<Kafein[]>(this.url).subscribe((data) => {
      this.httpData = data;
    });
  }
}
