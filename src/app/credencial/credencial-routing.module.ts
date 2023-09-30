import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredencialPage } from './credencial.page';

const routes: Routes = [
  {
    path: '',
    component: CredencialPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredencialPageRoutingModule {}
