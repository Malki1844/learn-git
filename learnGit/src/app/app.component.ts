import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StudentServiceService } from './student-service.service';
import Users from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 
  public users!: Users[]
  public isShown = false;
  public selectedOption = true

  constructor(private _service: StudentServiceService) {
    this._service.getUsers().then((res) => { 
      this.users = res;
      this.sortUsersByLastName(); 
    })
  }

  public showList() {
    if (this.selectedOption== true){
      this.isShown = this.selectedOption;
    }
    else{
      this.isShown= false;
    }
  }

  sortUsersByLastName(): void {
    this.users = [...this.users].sort((a, b) => a.lastName.localeCompare(b.lastName));
}
}
