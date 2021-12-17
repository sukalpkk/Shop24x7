import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser : any = this.authenticationService.currentUserValue;
        if (currentUser) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }

      isLoggedIn(): boolean {
        let status = false
        if (localStorage.getItem('isLoggedIn') == 'true') {
          status = true
        } else {
          status = false
        }
        return status
      }
    
      isAdmin(): boolean{
        if (localStorage.getItem('admin') == 'true'){
          return true;
        }else{
          return false;
        }
      }
    
      logout() {
        
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('id');
        localStorage.removeItem('admin');
    
        window.location.replace('/logout');
      }


    
}
