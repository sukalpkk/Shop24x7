import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/components/helpers/auth.gaurd';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _authGuard:AuthGuard, private _router:Router) { }

  ngOnInit(): void {
    if (!this._authGuard.isAdmin()){
      alert("Successfully logged in as admin");
      this._router.navigate(['admin-home']);
    }
  }

}
