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
      isLikeAngular: true
    }
  ]
}