import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { IncluirUnidadeComponent } from './incluir-unidade.component';
import { UnidadeNegocioService } from '../../../services/unidade-negocio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('IncluirUnidadeComponent', () => {
  let component: IncluirUnidadeComponent;
  let fixture: ComponentFixture<IncluirUnidadeComponent>;
  let mockService: jasmine.SpyObj<UnidadeNegocioService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('UnidadeNegocioService', ['incluirUnidade']);
    mockDialog = jasmine.createSpyObj('MatDialog', ['closeAll']);

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NoopAnimationsModule,
        IncluirUnidadeComponent
      ],
      providers: [
        { provide: UnidadeNegocioService, useValue: mockService },
        { provide: MatDialog, useValue: mockDialog },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IncluirUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Initialize ', () => {
    expect(component).toBeTruthy();
  });

  it('Create a form when starting the OnInit method', () => {
    expect(component.unidadeForm).toBeDefined();
    expect(component.unidadeForm.controls['descricao']).toBeDefined();
    expect(component.unidadeForm.controls['nome']).toBeDefined();
  });

  it('should make the nome control required', () => {
    const control = component.unidadeForm.get('nome');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should submit form if valid for insert a unity', () => {
    mockService.incluirUnidade.and.returnValue(of({}));

    component.unidadeForm.setValue({ descricao: 'Teste', nome: 'Unidade Teste' });
    component.submitForm();

    expect(mockService.incluirUnidade).toHaveBeenCalledWith({ descricao: 'Teste', nome: 'Unidade Teste' });
    expect(mockDialog.closeAll).toHaveBeenCalled();
  });

  it('should not submit form if invalid', () => {
    component.unidadeForm.setValue({ descricao: 'Teste', nome: '' });
    component.submitForm();

    expect(mockService.incluirUnidade).not.toHaveBeenCalled();
  });

  it('should close dialog on cancel', () => {
    component.cancelarAlteracao();
    expect(mockDialog.closeAll).toHaveBeenCalled();
  });
});
