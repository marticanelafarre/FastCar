import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContentComponent } from './content/content.component';
import { QuisomComponent } from './quisom/quisom.component';
import { RegComponent } from './log/reg/reg.component';

const routes: Routes = [
  { path: 'inicio', component : ContentComponent},
  { path: 'galeria', component : GaleriaComponent},
  { path: 'quisom', component : QuisomComponent},
  { path: 'reg', component : RegComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
