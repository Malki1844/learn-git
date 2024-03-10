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
      adress: "Tel Aviv Arlozorov 12",
      isLikeAngular: true
    },
    {
      firstName: "Rachel", 
      lastName: "Weiss",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    },
    {
      firstName: "Racheli", 
      lastName: "Margalit",
      adress: "Jerusalem Yafo 52",
      isLikeAngular: true 
    }
  ]
}
