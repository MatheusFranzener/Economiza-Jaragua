import { Injectable } from "@angular/core";
import { element } from "@angular/core/src/render3/instructions";
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";

import { routerNgProbeToken } from "@angular/router/src/router_module";
import { Observable } from "rxjs";

@Injectable()

class CheckLogged implements CanActivate {
    constructor(private router: Router) { }

    

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
 

       if(localStorage.getItem('administrador')!= null && localStorage.getItem('administrador')!= ''){
        return true;
       }

       if(localStorage.getItem('user')!= null && localStorage.getItem('user')!= '' ){
           if(location.pathname == '/home/cadastrar-promocao' || location.pathname == '/mercados/cadastrar' ){
          
            this.router.navigate(['/login'])
            return false;
           } else {
               return true;
           }
       } this.router.navigate(['/login'])
    } 
}


export default CheckLogged;