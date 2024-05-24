import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { path: 'contato', component: ContatoComponent },
  { path: 'artigos', loadChildren: () => import('./artigos/artigos.module').then(m => m.ArtigosModule) },
  { path: '', pathMatch: 'full', redirectTo: 'artigos' },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  { path: '**', redirectTo: 'artigos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
