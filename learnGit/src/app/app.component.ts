import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsServiceService } from './students-service.service';
import Users from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public users!: Users = []
  constructor(private _service: StudentsServiceService){
    this._service.getUsers().then((res) => {this.users = res })
  }


  //public users = this._service.users
  // public users: Users = []
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
