import { HomePageComponent } from './modules/home/pages/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards';

const routes: Routes = [
  {path:'home', component: HomePageComponent },
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'login',  loadChildren: () => import('./modules/login').then(m => m.LoginModule)},
  {path:'users',  loadChildren: () => import('./modules/users').then(m => m.UsersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation:'reload',
    scrollPositionRestoration: 'enabled', // or 'top'
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64] // [x, y] - adjust scroll offset
            })
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
