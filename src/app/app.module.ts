import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FormloginComponent } from './componets/formlogin/formlogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import{JwtInterceptorService} from './helpers/jwt-interceptor.service';
import { AdminSystemComponent } from './pages/admin-system/admin-system.component';
import { RegisterComponent } from './components/register/register.component';
import { ListeUsersComponent } from './components/liste-users/liste-users.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    FormloginComponent,
    AdminSystemComponent,
    RegisterComponent,
    ListeUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  { provide : HTTP_INTERCEPTORS, useClass : JwtInterceptorService ,multi : true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
