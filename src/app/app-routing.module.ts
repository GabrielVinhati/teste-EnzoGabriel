import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mapbus',
    pathMatch: 'full'
  },
  {
    path: 'mapbus',
    loadChildren: () => import('./mapbus/mapbus.module').then( m => m.MapbusPageModule)
  },
  {
    path: 'documentacao',
    loadChildren: () => import('./documentacao/documentacao.module').then( m => m.DocumentacaoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
