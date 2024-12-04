import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
