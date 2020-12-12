import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LaunchResolverService } from './services/launch-resolver.service';

const routes: Routes = [
  {
     path: '', component: AppComponent,
    children: [
      {
        path: 'v3/launches', component: DashboardComponent, resolve: {
          viewdata: LaunchResolverService
        },
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange'
      },
    ]
  
  },
  { path: '**', component: DashboardComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LaunchResolverService]
})
export class AppRoutingModule { }
