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
      isLikeAngular: false
      adress: "Tel Aviv Arlozorov 12",
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
  public showList() {
    if (this.selectedOption== true){
      this.isShown = this.selectedOption;
    }
    else{
      this.isShown= false;
    }
  }
}
