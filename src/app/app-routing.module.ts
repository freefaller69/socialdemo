import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/logreg', pathMatch: 'full' },
  { path: 'logreg', component: RegisterFormComponent },
  { path: 'posts', component: PostsComponent },
  // { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
