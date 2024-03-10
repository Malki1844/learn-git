import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
import Users from './user.model'

@Injectable({
  providedIn: 'root'
})
export class StudentsServiceService {

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

  public getUsers() : Promise<Users[]>{
    return new Promise(( resolve, rejects)=>{
      setTimeout(()=>{
        resolve(this.users)
      },3000);
    })
  }
}


