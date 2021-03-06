import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent} from './detail/detail.component';
import { AngularAppComponent } from './angular-app/angular-app.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'application', component: AngularAppComponent},
  {path: 'video', component: MediaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
