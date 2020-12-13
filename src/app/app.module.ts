import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { LibraryComponent } from './library/library.component';

import { CommandeComponent } from './commande/commande.component';
import { HomeComponent } from './home/home.component';
import { AvisComponent } from './avis/avis.component';
import { CommandeafficheComponent } from './commandeaffiche/commandeaffiche.component';
import { CmdmodifComponent } from './cmdmodif/cmdmodif.component';
import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StatComponent } from './stat/stat.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LibraryComponent,
    CommandeComponent,
    HomeComponent,
    AvisComponent,
    CommandeafficheComponent,
    CmdmodifComponent,
    StatComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ChartsModule,
    ReactiveFormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
