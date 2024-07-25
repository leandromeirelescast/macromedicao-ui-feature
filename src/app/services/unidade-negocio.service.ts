import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UnidadeNegocioService {

  constructor(public http: HttpClient) {
  }


  getUnidadesCadastradas(page: number, size: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get(
      `${environment.urlApi}/unidade-negocio`, {params}
    );
  }
}
