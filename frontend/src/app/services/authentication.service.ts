import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: any;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    const value: any = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject(JSON.parse(value));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
}

  public register(user: any) {
    return this.http.post('http://localhost:8080/api/auth/register', user)
  }
  public login(user: any) {
    return this.http.post('http://localhost:8080/api/auth/login', user).pipe(map((user:any) => {
      // login successful if there's a jwt token in the response
      console.log(user);
      if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(user)
          this.currentUserSubject.next(user);
      }

      return user;
  }));
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
