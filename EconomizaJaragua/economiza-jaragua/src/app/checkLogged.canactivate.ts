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
           } else {
               this.router.navigate(['/login'])
               return false;
           }
       }
    } 



export default CheckLogged;