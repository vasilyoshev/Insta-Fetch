import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LikeProcessesComponent } from './like-processes/like-processes.component';
import { FollowProcessesComponent } from './follow-processes/follow-processes.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'process/likes',
    pathMatch: 'prefix',
  },
  {
    path: 'process/likes',
    component: LikeProcessesComponent
  },
  {
    path: 'process/followers',
    component: FollowProcessesComponent
  },
  {
    path: 'blacklist',
    component: BlacklistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
