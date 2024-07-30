import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {PaginatorModule} from "primeng/paginator";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import { FormsModule } from '@angular/forms';
import {UnidadeForm} from "../../../models/UnidadeForm";
import {UnidadeNegocio} from "../../../models/UnidadeNegocio";
import {UnidadeNegocioService} from "../../../services/unidade-negocio.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-editar-unidade',
  standalone: true,
  imports: [
    PaginatorModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    FormsModule
  ],
  templateUrl: './editar-unidade.component.html',
  styleUrl: './editar-unidade.component.scss'
})
export class EditarUnidadeComponent implements OnInit{

  unidade!: UnidadeForm
  unidadeEditForm: any
  objectToEdit: any
  constructor(private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog,
              private fb: FormBuilder,
              private service: UnidadeNegocioService) {
    this.objectToEdit = {...data.item}
  }

  ngOnInit(){
    this.createForm();
  }

  createForm(): void {
    this.unidadeEditForm = this.fb.group({
        descricao: [''],
        nome: ['', Validators.required],
      }
    )
  }


  cancelarAlteracao() {
    this.dialog.closeAll();
  }

  editarUnidade(unidadeNegocio: UnidadeNegocio){
      this.service.atualizarUnidade(unidadeNegocio.id, unidadeNegocio).pipe(
        tap((res) => {

        })).subscribe((result) => {
        this.dialog.closeAll()
      })
  }


}
