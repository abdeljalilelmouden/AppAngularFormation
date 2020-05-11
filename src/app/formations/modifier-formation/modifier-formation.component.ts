import { Component, OnInit } from '@angular/core';
import { FormationsService } from 'src/app/services/service-formation/formations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationsModule } from 'src/app/modules/formations/formations.module';

@Component({
  selector: 'app-modifier-formation',
  templateUrl: './modifier-formation.component.html',
  styleUrls: ['./modifier-formation.component.css']
})
export class ModifierFormationComponent implements OnInit {

  constructor(private formationsService:FormationsService, private activatedRoute:ActivatedRoute,private router:Router) { }
  formationsModule: FormationsModule = {
    id:null,
    title:null,
    dateDeDebut: null,
    dateDeFin: null,
    description:null,
    prix:null,
    formateur:null,
  } 
  public formation: any;
  public id_formation;
  ngOnInit(): void {
    let idFormation = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.formationsModule.id = idFormation;
    this.formationsService.getOneFormation(this.formationsModule.id)
    .subscribe(data=>{
      this.formation=data;
    },error=>{
      console.log(error);
    });
  }

  public UpdateFormation(value: any){
    this.formationsService.UpdateFormation(this.formationsModule.id,value)
    .subscribe(data=>{
       this.router.navigate(['formations']);
       
    },err=>{
      console.log("error");
    });
  }
}
