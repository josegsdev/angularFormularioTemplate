import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'template', loadChildren:()=>{
      return import('./template/template.module').then(modulo=>modulo.TemplateModule)
    }
  },
  {
    path:'reactive', loadChildren:()=>{
      return import('./reactive/reactive.module').then(modulo=>modulo.ReactiveModule)
    }
  },
  {
    path:'**',redirectTo:'template'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
