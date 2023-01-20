import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DialogoComponent } from './dialogo/dialogo.component';

const routes: Routes = [
  {path:'dialogo', component:DialogoComponent},
  {path:'body', component:BodyComponent},
  {path:'**',pathMatch:'full',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
