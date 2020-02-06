import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardLayoutComponent } from '../layouts/dashboard-layout.component';
import { LoginLayoutComponent } from '../layouts/login-layout.component';

const routes: Routes = [
    {
      path: '',
      component: DashboardLayoutComponent,
      canActivate: [AuthenticationGuard],
      children: [
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'home',
          component: HomeComponent
        }
      ]
    },
    {
      path: '',
      component: LoginLayoutComponent,
      children: [
        {
            path: 'login',
            component: LoginComponent
        },
      ]
    },
    {
        path: 'home',
        component: HomeComponent
    },
];

@NgModule({
  declarations: [
      HomeComponent,
      DashboardComponent,
      LoginComponent,
      DashboardLayoutComponent,
      LoginLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes),
    MsAdalAngular6Module.forRoot({
      tenant: '279ef45d-7099-408c-8ce9-671b74eb1826',
      clientId: 'e88e7f2e-9bf8-43ef-ab36-893bd50a3604',
      redirectUri: 'http://localhost:4200/dashboard',
      postLogoutRedirectUri: 'https://www.google.com/',
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage',
    })
  ],
  exports: [
    RouterModule,
    SharedModule,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    DashboardLayoutComponent,
    LoginLayoutComponent
  ],
})
export class PagesModule { }
