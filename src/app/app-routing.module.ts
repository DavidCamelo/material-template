import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CitasComponent } from './pages/citas/citas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'citas', component: CitasComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
