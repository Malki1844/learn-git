import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import Users from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public isShown = false;
  public selectedOption = true
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
  public showList() {
    if (this.selectedOption== true){
      this.isShown = this.selectedOption;
    }
    else{
      this.isShown= false;
    }
  }
}
