import { ListeUsersComponent } from './components/liste-users/liste-users.component';
import { AuthGuard } from './helpers/authentication.guard';
import { RegisterComponent } from './components/register/register.component';
import { FormloginComponent } from './componets/formlogin/formlogin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';


const routes: Routes = [
  {
    path:'logincheck',
    component : FormloginComponent
    
  },
  {
  path :'ajout' ,
  component:RegisterComponent ,
  canActivate:[AuthGuard]
},
{
path: 'listeUtilisateur',
component : ListeUsersComponent,
canActivate:[AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
