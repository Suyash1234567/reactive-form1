import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicefirstService } from '../servicefirst.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  textBoxType="password";
  imagesource="./info.png"
  unamePattern = "^[A-Za-z]+$";
  pwdPattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  mobnumPattern = "^[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  empidPAttern = "^[0-9]{4}$";
  data;
  constructor(private formBuilder: FormBuilder , private router:Router, private ServicefirstService: ServicefirstService) { 
    //this.data = JSON.parse(localStorage.getItem('dd'));
    this.data= ServicefirstService.datalelo();
  
  
}

  ngOnInit() {
    //console.log('hello');
    this.registerForm = this.formBuilder.group({
      firstName: [this.data.firstName, [Validators.required, Validators.pattern(this.unamePattern)]],
      lastName: [this.data.lastName, [Validators.required, Validators.pattern(this.unamePattern)]],
      gender: [this.data.gender, [Validators.required, Validators.pattern(this.unamePattern)]],
      phn: [this.data.phn, [Validators.required, Validators.pattern(this.mobnumPattern)]],
      password: [this.data.password, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confpassword: [this.data.confpassword, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      num: [this.data.num, [Validators.required, Validators.pattern(this.empidPAttern)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  show() {
    this.textBoxType="text";
  }
  hide() {
    this.textBoxType="password";
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.controls["password"]["value"] != this.registerForm.controls["confpassword"]["value"]) {
      alert("Both the password fields doesn't match");
      return;
    }
   
    //localStorage.setItem("dd", JSON.stringify(this.registerForm.value)); //dd is KEY (string key here) whereas json part is value
     this.ServicefirstService.datadalo(this.registerForm.value);
     
    this.router.navigate(['/newpage']); 
    
    //alert(localStorage.getItem("firstName"));
    // console.log(this.registerForm.controls["firstName"]["value"]);
    //alert(this.registerForm.controls[0])
  }
}
