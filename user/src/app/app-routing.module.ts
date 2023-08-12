import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('../homepage/home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  
  {
    path: 'u-home',
    loadChildren: () => import('./u-home/u-home.module').then( m => m.UHomePageModule)
  },
  {
    path: 'u-detail',
    loadChildren: () => import('./u-detail/u-detail.module').then( m => m.UDetailPageModule)
  },
  {
    path: 'u-appointment',
    loadChildren: () => import('./u-appointment/u-appointment.module').then( m => m.UAppointmentPageModule)
  },

  {
    path: 'adm',
    loadChildren: () => import('./adm/adm.module').then( m => m.AdmPageModule)
  },
  {
    path: 'adm-employer',
    loadChildren: () => import('./adm-employer/adm-employer.module').then( m => m.AdmEmployerPageModule)
  },

  {
    path: 'adm-appointment',
    loadChildren: () => import('./adm-appointment/adm-appointment.module').then( m => m.AdmAppointmentPageModule)
  },
  {
    path: 'adm-receipt',
    loadChildren: () => import('./adm-receipt/adm-receipt.module').then( m => m.AdmReceiptPageModule)
  },
  {
    path: 'u-booking',
    loadChildren: () => import('./u-booking/u-booking.module').then( m => m.UBookingPageModule)
  },

 
  {
    path: 'database',
    loadChildren: () => import('./database/database.module').then( m => m.DatabasePageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
