import { Component, OnInit ,Inject} from '@angular/core';
import { Control } from 'app/Control';
import { ControlService } from 'app/control.service';
import { Router } from '@angular/router';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  list : Control[];
  list_copy : Control[];
  body : Control ;

 
  constructor(private controltApi : ControlService , private router : Router ) { }

  ngOnInit() {
   
    this.getControls();
  }
 


  getControls(){
    this.controltApi.getAll()
    .subscribe(
      (data :Control[])=> {
       console.log(data) 
      
       this.list = data
       this.list_copy = data },
      error=> console.log(error)
    )
  }
  delete(id){
    console.log (`delete todo ${id}`)
    this.controltApi.delete(id)
    .subscribe(data=>{
      this.ngOnInit(); // updates data table
      //Swal.fire('deleted !' ,'' , 'success')
      this.getControls() ;
    })
    //console.log(this.body) ; 
 }
 




  edit(body): void {
    window.localStorage.removeItem("editId");
    window.localStorage.setItem("editId", body.id.toString());
    this.router.navigate(['upgrade']);
  };

  add(): void {
    this.router.navigate(['typography']);
  };







}
