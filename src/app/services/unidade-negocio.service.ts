import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {UnidadeNegocio, UnidadeNegocioDTO} from "../models/UnidadeNegocio";

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

  atualizarUnidade(id: number , data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});


      let unidadeNegocioDTO: UnidadeNegocioDTO  = {
        nome: data.nmUnidadeNegocio,
        descricao: data.dsUnidadeNegocio,
      }

    return this.http.put(`${environment.urlApi}/unidade-negocio/${id}`, unidadeNegocioDTO, {headers: headers} );
  }

  buscarPorNome(selectedValue: any): Observable<any>{
    return this.http.get(`${environment.urlApi}/unidade-negocio/search/${selectedValue}`)
  }
}
