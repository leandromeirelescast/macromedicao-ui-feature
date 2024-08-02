import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { UnidadeNegocioComponent } from './unidade-negocio.component';
import { UnidadeNegocioService } from '../../services/unidade-negocio.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {EditarUnidadeComponent} from "./editar-unidade/editar-unidade.component";
import {IncluirUnidadeComponent} from "./incluir-unidade/incluir-unidade.component";

describe('UnidadeNegocioComponent', () => {
  let component: UnidadeNegocioComponent;
  let fixture: ComponentFixture<UnidadeNegocioComponent>;
  let unidadeNegocioService: jasmine.SpyObj<UnidadeNegocioService>;
  let matDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    const unidadeNegocioServiceSpy = jasmine.createSpyObj('UnidadeNegocioService', ['getUnidadesCadastradas', 'deleteUnidade']);
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      imports: [UnidadeNegocioComponent], // Importar o componente standalone diretamente
      providers: [
        { provide: UnidadeNegocioService, useValue: unidadeNegocioServiceSpy },
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ],
      schemas: [NO_ERRORS_SCHEMA] // Ignora erros de schemas desconhecidos
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadeNegocioComponent);
    component = fixture.componentInstance;
    unidadeNegocioService = TestBed.inject(UnidadeNegocioService) as jasmine.SpyObj<UnidadeNegocioService>;
    matDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load unidades on init', () => {
    const response = {
      content: [{ id: 1, nome: 'Unidade 1', descricao: 'Descrição 1' }],
      totalElements: 1,
      totalPages: 1
    };
    unidadeNegocioService.getUnidadesCadastradas.and.returnValue(of(response));
    fixture.detectChanges(); // ngOnInit é chamado

    expect(component.unidadeNegocio.length).toBe(1);
    expect(component.totalElements).toBe(1);
    expect(component.totalPages).toBe(1);
    expect(unidadeNegocioService.getUnidadesCadastradas).toHaveBeenCalledWith(component.page, component.size);
  });

  it('should open dialog for creating a new unidade', () => {
    matDialog.open.and.returnValue({ afterClosed: () => of(true) } as any);

    component.openDialog();

    expect(matDialog.open).toHaveBeenCalledWith(IncluirUnidadeComponent, {
      height: '350px',
      width: '750px',
    });
  });

  it('should open dialog for editing an existing unidade', () => {
    const unidade = { id: 1, nome: 'Unidade 1', descricao: 'Descrição 1' };
    matDialog.open.and.returnValue({ afterClosed: () => of(true) } as any);

    // @ts-ignore
    component.openEditDialog(unidade);

    expect(matDialog.open).toHaveBeenCalledWith(EditarUnidadeComponent, {
      height: '350px',
      width: '750px',
      data: { item: unidade }
    });
  });

  // @ts-ignore
  it('should delete an unidade', fakeAsync(() => {
    let unidadeId = 3004;
    unidadeNegocioService.deleteUnidade.and.returnValue(of({}));

    component.deleteItem(unidadeId);
    tick();

    expect(unidadeNegocioService.deleteUnidade).toHaveBeenCalledWith(unidadeId);
  }));

  it('should change page and load unidades', () => {
    // @ts-ignore
    spyOn(component, 'loadUnidades');
    const event = { pageIndex: 1, pageSize: 10 };

    component.onPageChange(event);

    expect(component.page).toBe(1);
    expect(component.size).toBe(10);
    // @ts-ignore
    expect(component.loadUnidades).toHaveBeenCalledWith(1, 10);
  });
});
