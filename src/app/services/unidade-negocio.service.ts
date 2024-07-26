import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";

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

  incluirUnidade(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(`${environment.urlApi}/unidade-negocio`, data);
  }

  deleteUnidade(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.delete(`${environment.urlApi}/unidade-negocio/${id}`, {headers});
  }
}
