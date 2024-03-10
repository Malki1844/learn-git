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

public updateDetails(user : Users){
  


}

  public users: Users[] = [
    {
      firstName: "teacher", 
      lastName: "teacher",
      isLikeAngular: true
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
    }
  ]
}
