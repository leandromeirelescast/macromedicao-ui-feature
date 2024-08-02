import {Component } from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {UnidadeData, UnidadeNegocio} from "../../models/UnidadeNegocio";
import {Router} from "@angular/router";
import {UnidadeNegocioService} from "../../services/unidade-negocio.service";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {IncluirUnidadeComponent} from "./incluir-unidade/incluir-unidade.component";
import {MatButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {EditarUnidadeComponent} from "./editar-unidade/editar-unidade.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-unidade-negocio',
  standalone: true,
  imports: [
    NgForOf,
    MatIcon,
    MatButton,
    MatPaginator,
    CommonModule,
    FormsModule
  ],
  templateUrl: './unidade-negocio.component.html',
  styleUrl: './unidade-negocio.component.scss'
})
export class UnidadeNegocioComponent {

  constructor(private router: Router,
              private unidadeNegocioService: UnidadeNegocioService,
              public dialog: MatDialog) {
  }
  totalElements = 50;
  size = 10;
  totalPages = 0;
  page = 0;
  unidadeNegocio:UnidadeNegocio[] = []
  unidadeFilter:UnidadeData = {
    dataList: []
  }
  activeSearch= false;
  selectedValue: any;

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

  openDialog() {
   const dialogRef = this.dialog.open(IncluirUnidadeComponent, {
      height: '350px',
      width: '750px',
    });

   dialogRef.afterClosed().subscribe(() => {
     this.loadUnidades(this.page, this.size)   }
   )
  }

  openEditDialog(unidadeNegocio: UnidadeNegocio) {
    const dialogEditRef = this.dialog.open(EditarUnidadeComponent, {
      height: '350px',
      width: '750px',
      data : {
        item: unidadeNegocio
      }
    });

    dialogEditRef.afterClosed().subscribe((result) => {
      this.loadUnidades(this.page, this.size)   }
    )

  }

  deleteItem(id: number) {
    this.unidadeNegocioService.deleteUnidade(id).subscribe(() => {
      this.loadUnidades(this.page, this.size);
    });
  }


  onPageChange(event: any) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.loadUnidades(this.page, this.size);
  }

  loadSearch(item: UnidadeNegocio, active: boolean): void {
    this.activeSearch = true
    console.log("VALOR", this.selectedValue)

    this.unidadeNegocioService.buscarPorNome(this.selectedValue).subscribe(response => {
      let data = response
      this.unidadeFilter.dataList = data
      })
     console.log(this.unidadeFilter);
    }

}
