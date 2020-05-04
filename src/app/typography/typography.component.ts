import { Component, OnInit } from '@angular/core';
import { ControlService } from 'app/control.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private controltApi : ControlService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      place: ['', Validators.required],
      temp: ['', Validators.required],
      humidity: ['', Validators.required],
     
    });
    console.log(this.addForm) ;
  }

  onSubmit() {
    this. controltApi.save(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['table-list']);
      });
  }

}
