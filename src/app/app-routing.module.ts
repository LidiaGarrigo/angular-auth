import { HomePageComponent } from './modules/home/pages/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { HomePageComponent } from './modules/home/pages/home-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'login', loadChildren:()=>import('./modules/login').then(m =>m.LoginModule)},
  {path:'users', loadChildren:()=>import('./modules/users').then(m =>m.UsersModule),
                 canActivate:[AuthGuard]}


=======
import { AuthGuard } from './shared/guards';

const routes: Routes = [
  {path:'home', component: HomePageComponent },
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'login',  loadChildren: () => import('./modules/login').then(m => m.LoginModule)},
  {path:'users',  loadChildren: () => import('./modules/users').then(m => m.UsersModule)}
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
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
