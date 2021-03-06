import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  public host:string = "http://localhost:8443/";
  constructor(private httpClient:HttpClient) { }

  public getAllFormation(){
    return this.httpClient.get(this.host+"/formations");
  }
  public getOneFormation(id:string){
    return this.httpClient.get(this.host+"formations/"+id);
  }
  public delateFormation(id:number){
    return this.httpClient.delete(this.host+"formations/"+id);
  }
  public ajouteFormation(url, data){
    return this.httpClient.post(url, data);
  }
  public UpdateFormation(id,data){
    return this.httpClient.put(this.host+"formations/"+id,data);
  }
}
