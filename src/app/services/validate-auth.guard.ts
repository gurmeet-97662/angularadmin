import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateAuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let data: any = localStorage.getItem('auth');
    data = data?JSON.parse(data):{};
    if (data.remember) {
      this.router.navigate(['/dashboard'])
      return false
    } else {
      localStorage.removeItem('auth')
      return true;
    }
  }

}
