import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/components/helpers/auth.gaurd';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin:boolean=false;
  loginStatus:boolean = false;
  constructor(private _authGuard:AuthGuard) { }

  ngOnInit(): void {
    this.loginStatus = this._authGuard.isLoggedIn();
    this.isAdmin = this._authGuard.isAdmin();

    console.log("logged in: " + this.loginStatus);
    console.log('Admin or normal user:'+ this.isAdmin);
  
  }
  
  title = 'frontend';

  logout(){
    this._authGuard.logout();
    
  }

}
