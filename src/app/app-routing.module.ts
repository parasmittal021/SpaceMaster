import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ResolverService } from './services/resolver.service';

const routes: Routes = [
  {
     path: '', component: AppComponent,
    children: [
      {
        path: 'v3/launches', component: DashboardComponent, resolve: {
          viewdata: ResolverService
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
  providers: [ResolverService]
})
export class AppRoutingModule { }
