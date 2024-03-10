import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Users from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public users: Users[] = [
    {
      firstName: "teacher", 
      lastName: "teacher",
      isLikeAngular: false
    },
    {
      firstName: "Rachel", 
      lastName: "Weiss",
      isLikeAngular: true
    },
    {
      firstName: "Racheli", 
      lastName: "Margalit",
      isLikeAngular: true
    },
    {
      firstName: "Avital", 
      lastName: "Stiinemetz",
      isLikeAngular: true
    },
    {
      firstName: "Malki", 
      lastName: "Markson",
      isLikeAngular: true
    }, {
      firstName: "Sara", 
      lastName: "Molcho",
      isLikeAngular: false
    }, {
      firstName: "Dasi", 
      lastName: "Genut",
      isLikeAngular: true
    }, {
      firstName: "Chani", 
      lastName: "Bloch",
      isLikeAngular: true
    }, {
      firstName: "Michal", 
      lastName: "Frisbeg",
      isLikeAngular: false
    }, {
      firstName: "Mimi", 
      lastName: "Brenig",
      isLikeAngular: true
    }, {
      firstName: "Shiri", 
      lastName: "Miler",
      isLikeAngular: true
    }, {
      firstName: "Malki", 
      lastName: "Krmlovski",
      isLikeAngular: false
    }, {
      firstName: "Shulamit", 
      lastName: "Rozntal",
      isLikeAngular: true
    }, {
      firstName: "Michal", 
      lastName: "Amir",
      isLikeAngular: true
    }, {
      firstName: "Tzipi", 
      lastName: "Elfer",
      isLikeAngular: false
    },
    {
      firstName: "Tammar", 
      lastName: "Malik",
      isLikeAngular: true
    },{
      firstName: "Avigil", 
      lastName: "Eleg",
      isLikeAngular: true
    },{
      firstName: "Ayelet", 
      lastName: "Royter",
      isLikeAngular: true
    },{
      firstName: "Orit", 
      lastName: "Rabbi",
      isLikeAngular: false
    },{
      firstName: "Michal", 
      lastName: "Vinstok",
      isLikeAngular: true
    },
    {
      firstName: "Hadas", 
      lastName: "Zilberberg",
      isLikeAngular: true
    },{
      firstName: "Shira", 
      lastName: "Zilberberg",
      isLikeAngular: false
    }
  ]
}
