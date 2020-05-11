import { Component, OnInit } from '@angular/core';
import { FormationsService } from 'src/app/services/service-formation/formations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationsModule } from 'src/app/modules/formations/formations.module'; 
@Component({
  selector: 'app-ajoute-formation',
  templateUrl: './ajoute-formation.component.html',
  styleUrls: ['./ajoute-formation.component.css']
})
export class AjouteFormationComponent implements OnInit {

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
  ngOnInit(): void {
  }
 
  public ajouteFormation(data: any){
    this.formationsService.ajouteFormation(this.formationsService.host+"formations",data)
      .subscribe(response=>{
        this.router.navigateByUrl("formations");
      },err=>{
        console.log(err);
      });
  }

}
