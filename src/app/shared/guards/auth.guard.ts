import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FireAuthService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
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
}
