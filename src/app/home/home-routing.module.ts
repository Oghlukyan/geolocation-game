import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'map',
        loadChildren: () => import('./map/map.module').then(m => m.MapPageModule),
      },
      {
        path: 'adventures',
        loadChildren: () => import('./adventures/adventures.module').then(m => m.AdventuresPageModule),
      },
      {
        path: '',
        redirectTo: 'adventures',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {
}
