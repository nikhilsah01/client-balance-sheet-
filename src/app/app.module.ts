import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase  } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { DasboardComponent } from './compments/dasboard/dasboard.component';
import { ClientsComponent } from './compments/clients/clients.component';
import { AddClientComponent } from './compments/add-client/add-client.component';
import { EditClientComponent } from './compments/edit-client/edit-client.component';
import { NavbarComponent } from './compments/navbar/navbar.component';
import { SidebarComponent } from './compments/sidebar/sidebar.component';
import { LoginComponent } from './compments/login/login.component';
import { RegisterComponent } from './compments/register/register.component';
import { SettingsComponent } from './compments/settings/settings.component';
import { PageNotFoundComponent } from './compments/page-not-found/page-not-found.component';

import { ClientService } from './services/client.service';

import { ClientDetailsComponent } from './compments/client-details/client-details.component';


// router

const appRoutes:Routes = [
   
   {path:'', component:DasboardComponent},
   {path:'register', component: RegisterComponent },
   {path:'login' , component: LoginComponent },
   {path:'add-client' , component: AddClientComponent },
   {path:'client/:id', component: ClientDetailsComponent}


]; 

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    ClientsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    ClientDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase,'clientpanelapp'),
    AngularFireAuthModule
  ],
  providers: [AngularFireDatabase,AngularFireDatabaseModule, ClientService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
