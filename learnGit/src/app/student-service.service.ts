import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import Users from './user.model'

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private $source = new Observable<Users[]>((observer) => {
    observer.next(this.users);
  });

  constructor() { }

  public users: Users[] = [
    {
      firstName: "teacher",
      lastName: "teacher",
      isLikeAngular: false,
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
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    },
    {
      firstName: "Avital",
      lastName: "Stiinemetz",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    },
    {
      firstName: "Malki",
      lastName: "Markson",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    }, {
      firstName: "Sara",
      lastName: "Molcho",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: false
    }, {
      firstName: "Dasi",
      lastName: "Genut",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    }, {
      firstName: "Chani",
      lastName: "Bloch",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    }, {
      firstName: "Michal",
      lastName: "Frisbeg",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: false
    }, {
      firstName: "Mimi",
      lastName: "Brenig",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    }, {
      firstName: "Shiri",
      lastName: "Miler",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    }, {
      firstName: "Malki",
      lastName: "Krmlovski",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: false
    }, {
      firstName: "Shulamit",
      lastName: "Rozntal",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    }, {
      firstName: "Michal",
      lastName: "Amir",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    }, {
      firstName: "Tzipi",
      lastName: "Elfer",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: false
    },
    {
      firstName: "Tammar",
      lastName: "Malik",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    }, {
      firstName: "Avigil",
      lastName: "Eleg",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    }, {
      firstName: "Ayelet",
      lastName: "Royter",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    }, {
      firstName: "Orit",
      lastName: "Rabbi",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: false
    }, {
      firstName: "Michal",
      lastName: "Vinstok",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    },
    {
      firstName: "Hadas",
      lastName: "Zilberberg",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: true
    }, {
      firstName: "Shira",
      lastName: "Zilberberg",
      adress: "Bnei-Brak Rabi Akiva 82",
      isLikeAngular: false
    }
  ]

  public getUsers(): Observable<Users[]> {
    return this.$source
  }

  public getUsersCount(): number {
    return this.users.length;
  }
}
