import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {EstruturasComponent} from "./estruturas/estruturas.component";
import { InputManualComponent } from './input-manual/input-manual.component';
import { InputAutomaticoComponent } from './input-automatico/input-automatico.component';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';
import { ModeloRelatorioComponent } from './modelo-relatorio/modelo-relatorio.component';
import { FormulasComponent } from './formulas/formulas.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: NavBarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'estruturas', component: EstruturasComponent },
      { path: 'input-automatico', component: InputAutomaticoComponent },
      { path: 'input-manual', component: InputManualComponent },
      { path: 'ocorrencias', component: OcorrenciasComponent },
      { path: 'modelo-relatorio', component: ModeloRelatorioComponent },
      { path: 'formulas', component: FormulasComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
