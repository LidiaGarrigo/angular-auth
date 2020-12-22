import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
<<<<<<< HEAD

import { AuthService } from '../services';
=======
import { FireAuthService } from '../services';
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
<<<<<<< HEAD
  constructor(private authService:AuthService, private router:Router){}
  canActivate(){
    if(this.authService.getToken()){
    return true;
  } else {
    this.router.navigate(['/login']);
    return false;
  }
  }

=======
  constructor(private authFireService: FireAuthService, private router: Router) { }
  async canActivate() {
    const user = await this.authFireService.isLogged$().toPromise();
      if (user && user.uid) {
        return true;
      }
      else {
        this.router.navigate(['/login']);
        return false;

      }

  }
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
}
