import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  buscarUsuarios(){
    return new Promise((resolvido,rejeitado) => {

      fetch('/api/buscar_usuario',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  buscarMercados(){
    return new Promise((resolvido,rejeitado) => {

      fetch('/api/buscar_mercado',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  buscarEndereco(){
    return new Promise((resolvido,rejeitado) => {

      fetch('/api/buscar_endereco',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  buscarPromocao(){
    return new Promise((resolvido,rejeitado) => {

      fetch('/api/buscar_promocao',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

}
