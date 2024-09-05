import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/hero/hero.component";
import { ButtonComponent } from "./components/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, ButtonComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {}

  title = 'maeldaFrontEnd';
  dummyProduct = [
    {
      id:1,
      name:"Meat",
      image:"",
      rating:4,
    },
    {
      id:2,
      name:"Meat",
      image:"",
      rating:4,
    },
    {
      id:3,
      name:"Meat",
      image:"",
      rating:4,
    },
    {
      id:4,
      name:"Meat",
      image:"",
      rating:4,
    },

]
}
