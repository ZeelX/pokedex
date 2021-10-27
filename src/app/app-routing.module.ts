import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokelistComponent} from "./pokelist/pokelist.component";
import {PokedescriptComponent} from "./pokedescript/pokedescript.component";

const routes: Routes = [
  {path: 'pokelist', component:PokelistComponent},
  {path: 'pokelist/:code/:pokename', component:PokedescriptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
