import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Users from './user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  public filterArray!: Users[];
  public searchInput: string = "";

  constructor() {
    this.filterArray = this.users;
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
  ];


  filterUsers() {
    this.filterArray = this.users.filter((user) =>
      user.firstName.includes(this.searchInput) || user.lastName.includes(this.searchInput)
    )
  }
}
