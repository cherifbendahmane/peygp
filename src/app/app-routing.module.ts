import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'connexion', loadChildren: './connexion/connexion.module#ConnexionPageModule' },
  { path: 'inscription', loadChildren: './inscription/inscription.module#InscriptionPageModule' },
  { path: 'myspace/:sessionToken', loadChildren: './myspace/myspace.module#MyspacePageModule' },
  { path: 'inscript', loadChildren: './inscript/inscript.module#InscriptPageModule' },
  { path: 'monprofil/:sessionToken', loadChildren: './monprofil/monprofil.module#MonprofilPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
