import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatPaginator} from "@angular/material/paginator";
import {NgForOf, NgIf} from "@angular/common";
import {UnidadeNegocioComponent} from "./unidade-negocio/unidade-negocio.component";
import {UnidadeNegocio} from "../models/UnidadeNegocio";
import {Router} from "@angular/router";
import {UnidadeNegocioService} from "../services/unidade-negocio.service";

@Component({
  selector: 'app-estruturas',
  standalone: true,
  imports: [
    MatIcon,
    MatPaginator,
    NgForOf,
    NgIf,
    UnidadeNegocioComponent
  ],
  templateUrl: './estruturas.component.html',
  styleUrl: './estruturas.component.scss'
})
export class EstruturasComponent implements OnInit{

  activeTab = 'sistema';

  ngOnInit(): void {
  }



}
