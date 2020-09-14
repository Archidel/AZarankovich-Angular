import {Injectable} from '@angular/core';
import {IUser} from '../../interfaces/IUser';
import {DataService} from '../service/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private dataService: DataService
  ) {
  }

  public login(email: string, password: string): IUser {
    if (!(email || password)) {
      console.log('email or password can not be empty');
      return;
    }

    for (const user of this.dataService.users) {
      if (user.email === email && user.password === password) {
        return user;
      }
    }

    return null;
  }

  public logout(): void {
    localStorage.clear();
  }

  public isAuthenticated(): boolean {
    const isLogged = localStorage.getItem('isLogged');
    return isLogged === 'true';
  }

  public getUserInfo(id: number): IUser {
    if (!(id)) {
      console.log('user id can not be empty');
      return;
    }

    for (const user of this.dataService.users) {
      if (user.id === id) {
        return user;
      }
    }

    return null;
  }

}
