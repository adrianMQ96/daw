import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = '/assets/users.json';

  authUser(user: User, recordar): Observable<User>{
    return this.http.get<User>(this.url)
    .pipe(map(u =>{u['passwd']=user.passwd;
    if(recordar) localStorage.setItem('token', u.token);
    localStorage.setItem('login',u.login)
    return u}));
  }

  isAuth(): boolean{
    if(localStorage.getItem('token') != null && localStorage.getItem('token').length > 2){
      return true;
    }
    else return false;
  }

  logOut(){
    localStorage.removeItem('token');
  }
}
