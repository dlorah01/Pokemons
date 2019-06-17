import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsComponent  } from './pokemons/pokemons.component';
import { PokemonDerailComponent } from './pokemon-derail/pokemon-derail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pokemons' },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'pokemon-detail/:name', component: PokemonDerailComponent },
  { path: 'pokemon-detail/:id', component: PokemonDerailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
