import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient
      .get<any[]>('https://pokeapi.co/api/v2/pokemon/ditto')
      .subscribe({
        next: (res) => {
          console.log(res);
          console.log(`Se obtuvo ${res.length} resultados`);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
