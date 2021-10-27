import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../Models/pokemon";
import {ApiService} from "./service/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokedex';

}



