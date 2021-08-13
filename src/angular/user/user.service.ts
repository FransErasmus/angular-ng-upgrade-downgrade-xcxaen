import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser() {
    return {
      username: 'AngularUser'
    };
  }
}

export interface User {
  username: string;
}
