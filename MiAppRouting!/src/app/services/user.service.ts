import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usuarios: User[] = [
    new User(1, 'Pepe', 'e@p.es', 23),
    new User(2, 'Pepa', 'a@p.es', 24),
    new User(3, 'Pepo', 'o@p.es', 25),
    new User(4, 'Pepu', 'u@p.es', 26),
    new User(5, 'Pepi', 'i@p.es', 27)
  ];

  constructor() { }

  getUsuarios():User[]{
    return this._usuarios;
  }
}
