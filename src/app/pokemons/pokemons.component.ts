import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  Pokemons: any = [];

  constructor(public services: ServicesService) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    return this.services.getPokemons().subscribe(
  		data =>{
  			this.Pokemons=data.results;
    });
  }

}
