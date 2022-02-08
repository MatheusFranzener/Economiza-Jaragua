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

        //* teste do checkLogged 

        let contadorLogin = 0;

        let userName = localStorage.getItem('USER');
        let senha = localStorage.getItem('PASSWORD');
        
        let usuarios = [
            { user: "Matheus Franzener", password: "matheus123" }, 
            { user: "Felipe Vieira", password: "felipe123" }, 
            { user: "Kenzo Sato", password: "kenzo123" },
            { user: "Hedlinn Hohmann", password: "hedlinn123"},
            { user: "Fabiane Franzener", password: "fabiane123"}
        ];

        usuarios.forEach(function(element){
            if(element.user == userName && element.password == senha){
                contadorLogin++;
                return true
            }
        });                                                                                                                                                              
        
        if(contadorLogin != 0) {
            return true;
        } else {
            this.router.navigate([''])
            return false;
        }
    }
}

export default CheckLogged;