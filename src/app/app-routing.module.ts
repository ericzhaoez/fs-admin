import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { PropertiesComponent } from './components/properties/properties.component'
import { ProvidersComponent } from './components/providers/providers.component';
import { BookingsComponent } from './components/bookings/bookings.component';


const routes: Routes = [
  { path: 'dash-board', component: DashBoardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent},
  { path: 'properties', component: PropertiesComponent},
  { path: 'providers', component: ProvidersComponent},
  { path: 'bookings', component: BookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
