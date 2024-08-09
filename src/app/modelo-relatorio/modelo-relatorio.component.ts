import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {UserService} from "../services/user.service";
import {MatPaginator} from "@angular/material/paginator";
import {UsuarioForm} from "../models/UsuarioForm";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {catchError, EMPTY, tap} from "rxjs";
import {PermissaoDialogComponent} from "../permissao-dialog/permissao-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modelo-relatorio',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf,
    MatPaginator,
    MatIcon
  ],
  templateUrl: './modelo-relatorio.component.html',
  styleUrl: './modelo-relatorio.component.scss'
})
export class ModeloRelatorioComponent {
  form!: FormGroup;
  activeTab = 'cadastrados';
  perfis = [
    { label: 'Representante', value: 'representante' },
    { label: 'Administrador', value: 'administrador' },
    { label: 'Outros', value: 'outros' },
  ];
  usuariosCadastrados: UsuarioForm[]= [];
  page = 0;
  size = 20;
  totalElements = 0;
  totalPages = 0;

  constructor(private fb: FormBuilder, private userService: UserService,
              public dialog: MatDialog,
              private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      matriculaOuNome: [''],
      unidade: [''],
      perfil: ['']
    });
    this.getUsuarios(this.page, this.size)
  }

  getUsuarios(page: number, size: number) {
    this.userService.listarUsuarios(page, size).subscribe(response => {
      this.usuariosCadastrados = response.content;
      this.totalElements = response.totalElements;
      this.totalPages = response.totalPages;
    });
  }
  onPesquisar() {
    const { matriculaOuNome, unidade, perfil } = this.form.value;
    console.log('Pesquisar:', { matriculaOuNome, unidade, perfil });
    // Lógica de pesquisa vai aqui
  }

  onEditarUsuario(usuario: number) {
    console.log('Editar:', usuario);
    this.router.navigate([`/editar-usuario/${usuario}`]);
  }

  onPageChange(event: any) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.getUsuarios(this.page, this.size);
  }
}
