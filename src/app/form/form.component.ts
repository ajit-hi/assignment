import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private http : HttpService) { }

  dateError = false;
  message:string;

  validate(elem){
    let presentDate = new Date();
    let dob = new Date(elem.value);
    let diff = presentDate.getTime()-dob.getTime();
    diff /= (60*60*24*1000);
    let years = Math.abs(Math.round(diff/365));
    return years;
    


  }
  submit(f){

    this.http.saveForm(f.value).subscribe(response=>{
      this.message=response;
    })
  }

  ngOnInit() {
  }

}
