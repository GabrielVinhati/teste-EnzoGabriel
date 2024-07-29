import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentacaoPageRoutingModule } from './documentacao-routing.module';

import { DocumentacaoPage } from './documentacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentacaoPageRoutingModule
  ],
  declarations: [DocumentacaoPage]
})
export class DocumentacaoPageModule {}
