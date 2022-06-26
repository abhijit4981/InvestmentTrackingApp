import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelPojo } from 'src/app/models/user.model';
import { CompanyService } from 'src/app/services/company.service';
import { StaticService } from 'src/app/services/static.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;
  sectorList: string[] ;
  typeList : string[] ;
  constructor(private formBuilder: FormBuilder,private companyService:CompanyService , private router:Router,private staticService:StaticService) {
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
    this.sectorList = this.staticService.getAllSectors();
    this.typeList = this.staticService.getAllTypes();
  }
  onSubmit(userData :FormGroup) {
    console.log('Valid?', userData.valid); // true or false
    console.log('Value', userData.value);
    this.companyService.saveUser(userData.value)
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
