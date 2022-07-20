import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InProcessComponent } from './in-process.component';

const routes: Routes = [
  {
    path: '',
    component: InProcessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InProcessRoutingModule { }
