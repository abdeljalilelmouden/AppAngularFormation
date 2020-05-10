import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationsService } from 'src/app/services/service-formation/formations.service';

@Component({
  selector: 'app-voir-formation',
  templateUrl: './voir-formation.component.html',
  styleUrls: ['./voir-formation.component.css']
})
export class VoirFormationComponent implements OnInit {

  constructor(private formationsService:FormationsService, private activatedRoute:ActivatedRoute,private router:Router) { }
  public formation: any;
  public id_formation;
  ngOnInit(): void {
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.id_formation = id;
    this.formationsService.getOneFormation(this.id_formation)
    .subscribe(data=>{
      this.formation=data;
    },error=>{
      console.log(error);
    });
  }

  public delete_formation(id: any){
    let conf = confirm("vous avez vraiment supprimé ce produit");
    if(conf){
      this.formationsService.delateFormation(id)
      .subscribe(data=>{
        this.router.navigate(['formations']);
      },err=>{
        console.log(err);
      });

    }
    
  }
  

 

}
