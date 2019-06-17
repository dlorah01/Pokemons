import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-derail',
  templateUrl: './pokemon-derail.component.html',
  styleUrls: ['./pokemon-derail.component.css']
})
export class PokemonDerailComponent implements OnInit {

  name = this.actRoute.snapshot.params['name'];
  pokemonData: any = {};
  imagePokemon: any;
  poke: any;
  pokemon1: any=null;
  image1: any = null;
  image2: any = null;
  pokemon2: any=null;

  constructor(public services: ServicesService, public actRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.loadPokemon(this.name);
  }

  loadPokemon(name){
  	return this.services.getPokemonsByName(name).subscribe(
  		data =>{
  			this.pokemonData=data;
        this.poke= this.pokemonData.abilities[0].ability.name;
        this.imagePokemon = this.pokemonData.sprites.front_default;
        this.loadAbility(this.poke);
  		});
  }

  loadAbility(name){
    return this.services.getPokemonsByAbility(name).subscribe(
      data =>{
        var i=0;
        while(this.pokemon1 ==null || this.pokemon2==null || i<data.pokemon.length){
          let actual = data.pokemon[i].pokemon;
          if(this.pokemon1==null){
            if(!(actual.name === this.name)){
              this.pokemon1 = actual;
              console.log("pokemon 1 es:");
              console.log(this.pokemon1);
            }
          }
          else if(this.pokemon2==null){
            if(actual.name != this.name && actual.name != this.pokemon1.name){
              this.pokemon2= actual;
              console.log("pokemon 2 es:");
              console.log(this.pokemon2);
            }
          }
          i++;
        }
        console.log(this.pokemon1);
        console.log(this.pokemon2);
        this.loadImagesSimilarPokemon();
      });
  }

  loadImagesSimilarPokemon(){
    this.services.getPokemonsByName(this.pokemon1.name).subscribe(
      data =>{
        this.image1 = data.sprites.front_default;
      });
    this.services.getPokemonsByName(this.pokemon2.name).subscribe(
      data2 =>{
        this.image2 = data2.sprites.front_default;
      });
  }

  back(){
  	this.router.navigate(['/pokemons']);
  }

}

