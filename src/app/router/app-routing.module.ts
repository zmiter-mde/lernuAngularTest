import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestBlocksComponent } from '../test-blocks/test-blocks.component';

import { SingleTestComponent } from '../single-test/single-test.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: TestBlocksComponent },
  { path: 'question',  component: SingleTestComponent }
  /*,
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
  */
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
