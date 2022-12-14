import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionsPage } from './actions.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: ActionsPage,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionsPageRoutingModule {}
