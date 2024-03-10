import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentServiceService } from './student-service.service';
import Users from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public users!: Users[]
  constructor(private _service: StudentServiceService) {
    this._service.getUsers().then((res) => { this.users = res })
  }

  //  = [
  //   {
  //     firstName: "teacher", 
  //     lastName: "teacher",
  //     isLikeAngular: true
  //   },
  //   {
  //     firstName: "Rachel", 
  //     lastName: "Weiss",
  //     isLikeAngular: true
  //   },
  //   {
  //     firstName: "Racheli", 
  //     lastName: "Margalit",
  //     isLikeAngular: true
  //   }
  // ]
}
