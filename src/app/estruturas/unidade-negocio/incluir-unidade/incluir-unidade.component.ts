import {Component, OnInit} from '@angular/core';
import {UnidadeForm} from '../../../models/UnidadeForm'
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UnidadeNegocioService} from "../../../services/unidade-negocio.service";
import {MatDialog} from "@angular/material/dialog";
import {catchError, tap} from "rxjs";



@Component({
  selector: 'app-incluir-unidade',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './incluir-unidade.component.html',
  styleUrl: './incluir-unidade.component.scss'
})
export class IncluirUnidadeComponent implements OnInit {
  unidade!: UnidadeForm
  unidadeForm: any

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private service: UnidadeNegocioService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.unidadeForm = this.fb.group({
        descricao: [''],
        nome: ['', Validators.required],
      }
    )
  }


   submitForm(){
      if(this.unidadeForm.valid) {
       this.service.incluirUnidade(this.unidadeForm.value).pipe(
         tap((res) => {
         }),
       ).subscribe()
      }

  }

  cancelarAlteracao() {
    this.dialog.closeAll();
  }

}
