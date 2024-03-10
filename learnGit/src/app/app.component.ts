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
  ];
  
 

  constructor() {
    this.sortUsersByLastName();
  }
  // sortedUsers: Users[];
  
  sortUsersByLastName(): void {
    this.users = [...this.users].sort((a, b) => a.lastName.localeCompare(b.lastName));
}
 

  // filterList: any[];

  // constructor() {
  //   this.sortList(this.users.lastName);
  // }
  // sortList(name: string): void {
  //   this.filterList = this.users.filter(user => user.lastName === name)
  // }

}
