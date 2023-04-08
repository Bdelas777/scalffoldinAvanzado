import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokeapiService } from './core/services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly pokeapiService: PokeapiService) {}
  ngOnInit(): void {
    this.pokeapiService.getPokemonList().subscribe({
      next: (res) => {
        console.log(`Se obtuvo ${res.results.length} resultados`);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
