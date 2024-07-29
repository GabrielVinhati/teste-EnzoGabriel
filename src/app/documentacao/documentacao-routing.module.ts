import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentacaoPage } from './documentacao.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentacaoPageRoutingModule {}
