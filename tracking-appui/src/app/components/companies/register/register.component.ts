import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelPojo } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;

  sectorList: string[] = ['Banking', 'IT', 'Cement', 'Adani Group', 'Insurance', 'Paints','Electronics','Labs','Govt','Steel','Jindal Group'];
  typeList : string[] = ['Growth','Long Term','Intraday'];
  constructor(private formBuilder: FormBuilder,private userService:UserserviceService , private router:Router) {
   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      companyName: [''],
      companySequence: [''],
      companySector: [''],
      companyType: [''],
      companyCurrentPrice: [''],
      companyExpectedLow : [''],
      companyExpectedHigh : [''],
    });
  }
  onSubmit(userData :FormGroup) {
    console.log('Valid?', userData.valid); // true or false
    console.log('Value', userData.value);
    this.userService.saveUser(userData.value)
    .subscribe((data: ModelPojo)=>{
      console.log(data);
      this.router.navigate(['/success-component']);
    }) 
 }
 email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
