import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Control } from './Control';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ControlService {

  constructor(private http : HttpClient) { }

  url = 'http://localhost:8083/api';

  getAll(){
    return this.http.get(this.url+'/controls');
  }
  getById(id){
    return this.http.get(this.url+'/controls/'+id);
  }
  save(body : Control){
    return this.http.post(this.url+'/controls' , body);
  }
  edit(body : Control){
    return this.http.put(this.url+'/controls' , body);
  }
  
  delete(id){
    return this.http.delete(`http://localhost:8083/api/controls/${id}`);

  }

  
}
