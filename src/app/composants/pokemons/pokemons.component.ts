import { Component, OnInit } from '@angular/core';

import { dataPokemons } from './mock-pokemons';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  pokemons = dataPokemons;
  constructor() {}

  ngOnInit(): void {}
}
