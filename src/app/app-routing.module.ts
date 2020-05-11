import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationsComponent } from './formations/formations.component';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { VoirFormationComponent } from './formations/voir-formation/voir-formation.component';
import { AjouteFormationComponent } from './formations/ajoute-formation/ajoute-formation.component';
import { ModifierFormationComponent } from './formations/modifier-formation/modifier-formation.component';


const routes: Routes = [
  {path : "formations", component : FormationsComponent},
  {path : "voir-formation/:id", component : VoirFormationComponent},
  {path : "modifier-formation/:id", component : ModifierFormationComponent},
  {path : "ajoute-formation", component : AjouteFormationComponent},
  {path : "authentification", component : AuthentificationComponent},
  {path : "**", component : FormationsComponent},
  {path : "", component : AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

