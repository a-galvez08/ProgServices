import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = "https://api-pw-ith.herokuapp.com/api/usuarios";

  constructor(private http: HttpClient) { }

  public getUsuario() {
    return this.http.get(this.apiUrl + '/18330434');
  }
  public postUsuario(body: any) {
    return this.http.post(this.apiUrl, body);
  }

  public deleteUsuario( _id: any ) {
    return this.http.delete( this.apiUrl + '/' + _id );
  }
}
