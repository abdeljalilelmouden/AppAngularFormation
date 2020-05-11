import { Component, OnInit } from '@angular/core';
import { FormationsService } from '../services/service-formation/formations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  constructor(private formationsService:FormationsService, private router:Router) { }

  public listFormations:any;
  ngOnInit(): void {
    this.getAllFormation();
  }

  public getAllFormation(){
    this.formationsService.getAllFormation()
      .subscribe(data=>{
        this.listFormations=data;
      },error=>{
        console.log(error);
      });
  }

  public voir_formation(id: any){
    this.router.navigate(['voir-formation', id]);
  }
  public delete_formation(id: any){
    let conf = confirm("vous avez vraiment supprimé ce produit");
    if(conf){
      this.formationsService.delateFormation(id)
      .subscribe(data=>{
        this.getAllFormation();
      },err=>{
        console.log(err);
      });
    }
  }
  public ajoute_formation(){
    this.router.navigate(['ajoute-formation']);
  }
  public modifier_formation(id: any){
    this.router.navigate(['modifier-formation', id]);
  }

}
