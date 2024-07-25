import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {UnidadeNegocio} from "../../models/UnidadeNegocio";
import {Router} from "@angular/router";
import {UnidadeNegocioService} from "../../services/unidade-negocio.service";
import {response} from "express";

@Component({
  selector: 'app-unidade-negocio',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './unidade-negocio.component.html',
  styleUrl: './unidade-negocio.component.scss'
})
export class UnidadeNegocioComponent {

  constructor(private router: Router, private unidadeNegocioService: UnidadeNegocioService) {
  }
  totalElements = 50;
  size = 10;
  totalPages = 0;
  page = 0;
  unidadeNegocio:UnidadeNegocio[] = []

  ngOnInit(): void {
    this.loadUnidades(this.page, this.size)
  }


  private loadUnidades(page: number, size: number) {
    this.unidadeNegocioService.getUnidadesCadastradas(page, size).subscribe(response => {
      this.unidadeNegocio = response.content;
      this.totalElements = response.totalElements;
      this.totalPages = response.totalPages;
    });
  }
}
