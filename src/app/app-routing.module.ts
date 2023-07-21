import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'route-one',
    loadChildren: () => import('./route-one/route-one.module').then(m => m.RouteOneModule)
  },
  {
    path: 'route-two',
    loadChildren: () =>  import('./route-two/route-two.module').then(m => m.RouteTwoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
