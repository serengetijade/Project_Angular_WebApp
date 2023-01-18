import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  //This guard will determine if the product ID entered is valid. If not, it will navigate back to the product list page. 
  
  //Navigation requires a router, which is a dependency injected into the constructor:
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,  //A parameter that returns the route snapshot. The ActivatedRouteSnapshot contains the information about a route at any particular moment in time. 
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = Number(route.paramMap.get('id'));
      //set the id from the route parameter
      //Number = the number function will convert the string parameter to a number. 
      //route = the instance of the ActivatedRouteSnapshot
      //.paramMap = a built-in property of the ActivatedRouteSnapshot
      //.get = a built-in function
      //('id') = the parameter name to get
      if (isNaN(id) || id < 1){
        alert('Invalid product id');
        this.router.navigate(['/products']); //Activate a route with code and return to the products page. 
          //router = the Router instance defined in the constructor
          //.navigate = a built-in Navigation function
        return false;   //let the router know to cancel activating the product detail route.
      }
    return true;
  }

  
  
}
