import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FormationsModule {
  id;
  title:string;
  dateDeDebut: Data;
  dateDeFin: Date;
  description:string;
  prix:string;
  formateur:string;
 }
