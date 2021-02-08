import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'folder/Inbox',
    pathMatch: 'full',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: 'welcome-page',
    loadChildren: () => import('./pages/welcome-page/welcome-page.module').then( m => m.WelcomePagePageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./pages/admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'view-detail',
    loadChildren: () => import('./pages/user/view-detail/view-detail.module').then( m => m.ViewDetailPageModule)
  },
  {
    path: 'add-victim',
    loadChildren: () => import('./pages/user/add-victim/add-victim.module').then( m => m.AddVictimPageModule)
  },
  {
    path: 'edit-victim',
    loadChildren: () => import('./pages/user/edit-victim/edit-victim.module').then( m => m.EditVictimPageModule)
  },
  {
    path: 'user-modal',
    loadChildren: () => import('./modals/user-modal/user-modal.module').then( m => m.UserModalPageModule)
  },
  {
    path: 'admin-graph',
    loadChildren: () => import('./pages/admin/admin-graph/admin-graph.module').then( m => m.AdminGraphPageModule)
  },
  {
    path: 'admin-table',
    loadChildren: () => import('./pages/admin/admin-table/admin-table.module').then( m => m.AdminTablePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private platform: Platform,
    private router: Router,
    private storage: Storage,  
  ) {
    this.platform.ready().then(async ()=>{
      var logged_as = null
      this.storage.get('logged_user').then(res=>{
        logged_as = res;
        
        
      })
      console.log(logged_as);
      
      if(await this.storage.get('skip_intro') == 1 && await this.storage.get('logged_user')==null) {
        this.router.navigateByUrl('/login', {replaceUrl: true})

      } else if(await logged_as == '+628123456789') {
        this.router.navigateByUrl('/admin-dashboard', {replaceUrl: true})

      } else if(await logged_as != null && await logged_as != '+628123456789') {
        this.router.navigateByUrl('/home', {replaceUrl: true})
        
      } else {
        this.router.navigateByUrl('/', {replaceUrl: true})

      }
    })
  }

}
