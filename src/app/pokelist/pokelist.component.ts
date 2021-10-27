import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../Models/pokemon";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {

  private pokeTab: Array<Pokemon> = []

  constructor(
    private dataService: ApiService
  ) {
  }

  ngOnInit(): void {
   this.dataService.pokeList.subscribe((data: Array<Pokemon>) =>{
     this.pokeTab = data;
     console.log(this.pokeTab)
   });
 }

}


