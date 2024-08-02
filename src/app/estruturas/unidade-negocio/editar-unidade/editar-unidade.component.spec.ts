import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { of } from 'rxjs';
import { EditarUnidadeComponent } from './editar-unidade.component';
import { UnidadeNegocioService } from '../../../services/unidade-negocio.service';
import { ActivatedRoute } from '@angular/router';

describe('EditarUnidadeComponent', () => {
  let component: EditarUnidadeComponent;
  let fixture: ComponentFixture<EditarUnidadeComponent>;
  let mockService: jasmine.SpyObj<UnidadeNegocioService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  const mockData = {
    item: {
      id: 1,
      descricao: 'Descricao',
      nome: 'Nome'
    }
  };

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('UnidadeNegocioService', ['atualizarUnidade']);
    mockDialog = jasmine.createSpyObj('MatDialog', ['closeAll']);

    await TestBed.configureTestingModule({
      imports: [
        EditarUnidadeComponent, // Importa o componente standalone diretamente
        ReactiveFormsModule,
        FormsModule,
        PaginatorModule,
        MatFormFieldModule,
        MatInputModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockData },
        { provide: MatDialog, useValue: mockDialog },
        { provide: UnidadeNegocioService, useValue: mockService },
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form on init', () => {
    expect(component.unidadeEditForm).toBeDefined();
    expect(component.unidadeEditForm.controls['descricao']).toBeDefined();
    expect(component.unidadeEditForm.controls['nome']).toBeDefined();
  });

  it('should make the nome control required', () => {
    const control = component.unidadeEditForm.get('nome');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should call atualizarUnidade on submit with valid form', () => {
    mockService.atualizarUnidade.and.returnValue(of({}));

    component.unidadeEditForm.setValue({ descricao: 'Nova Descricao', nome: 'Novo Nome' });
    // @ts-ignore
    component.editarUnidade(mockData.item);

    expect(mockService.atualizarUnidade).toHaveBeenCalledWith(mockData.item.id, mockData.item);
    expect(mockDialog.closeAll).toHaveBeenCalled();
  });

  it('should close dialog on cancel', () => {
    component.cancelarAlteracao();
    expect(mockDialog.closeAll).toHaveBeenCalled();
  });
});
