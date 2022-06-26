import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelPojo } from 'src/app/models/user.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  longText:string;
  userForm: FormGroup ;
  showUpdateCard:boolean=true;
  dbModel:ModelPojo;
  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,private companyService:CompanyService , private router:Router) { }

  ngOnInit(): void {
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    this.longText ="Do you really want to update this contact "+mobileNumber;
    this.userForm = this.formBuilder.group({
      companyName: new FormControl(''),
      companySequence: new FormControl(''),
      companySector: new FormControl(''),
      companyType: new FormControl(''),
    });
  }
  
  updateModel(){
    this.showUpdateCard=false;
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    //rest call to get details of this user
    this.companyService.getModelBasedOnId(mobileNumber)
    .subscribe((data: ModelPojo)=>{
      console.log(data);
      //update the user form with model details
      this.userForm.controls['companyName'].setValue(data.companyName);
      this.userForm.controls['companySequence'].setValue(data.companySequence);
      this.userForm.controls['companySector'].setValue(data.companySector);
      this.userForm.controls['companyType'].setValue(data.companyType);
    })  
    
  }
  onSubmit(userData :FormGroup) {
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    console.log('Valid?', userData.valid); // true or false
    console.log('Value', userData.value);
    this.companyService.updateUser(userData.value,mobileNumber)
    .subscribe((data: ModelPojo)=>{
      console.log(data);
      this.router.navigate(['/success-component']);
    }) 
 }

}
