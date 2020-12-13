import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmdmodifComponent } from './cmdmodif/cmdmodif.component';
import { CommandeComponent } from './commande/commande.component';
import { CommandeafficheComponent } from './commandeaffiche/commandeaffiche.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { StatComponent } from './stat/stat.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path :"",component:HomeComponent},
  {path :"lib",component:LibraryComponent},
  {path :"login",component:UserComponent},
  {path :"cmd/:id/:prix",component:CommandeComponent},
  {path :"cmdaffiche",component:CommandeafficheComponent},
  {path :"cmdmodif/:id",component:CmdmodifComponent},
  {path :"stat",component:StatComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
