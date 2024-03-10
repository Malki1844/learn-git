import { Injectable } from '@angular/core';
import Users from './user.model'

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }

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

  public getUsers(): Promise<Users[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users)
      }, 3000);
    })
  }
}
