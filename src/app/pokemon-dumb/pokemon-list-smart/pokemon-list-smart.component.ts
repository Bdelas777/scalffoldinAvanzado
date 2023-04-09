import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/core/interfaces/pokemon-list.interface';
import { PokeapiService } from 'src/app/core/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-list-smart',
  templateUrl: './pokemon-list-smart.component.html',
  styleUrls: ['./pokemon-list-smart.component.scss'],
})
export class PokemonListSmartComponent implements OnInit {
  private _pokemons: PokemonList = { count: 0, next: '', results: [] };

  constructor(private readonly pokeapiService: PokeapiService) {}
  ngOnInit(): void {
    this.pokeapiService.getPokemonList().subscribe({
      next: (res) => {
        this._pokemons = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  get pokemons() {
    return this._pokemons?.results;
  }
}
