import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelPojo } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-cloneuser',
  templateUrl: './cloneuser.component.html',
  styleUrls: ['./cloneuser.component.css']
})
export class CloneuserComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;

  sectorList: string[] = ['Banking', 'IT', 'Cement', 'Adani Group', 'Insurance', 'Paints','Electronics','Labs','Govt','Steel','Jindal Group'];
  typeList : string[] = ['Growth','Long Term','Intraday'];
  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,private userService:UserserviceService , private router:Router) {
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
    this.updateModel();
  }
  updateModel(){
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    //rest call to get details of this user
    this.userService.getModelBasedOnId(mobileNumber)
    .subscribe((data: ModelPojo)=>{
      console.log(data);
      //update the user form with model details
      //this.registerForm.controls['companyId'].setValue(null);
      this.registerForm.controls['companyName'].setValue(data.companyName);
      this.registerForm.controls['companySector'].setValue(data.companySector);
      this.registerForm.controls['companyType'].setValue(data.companyType);
    })  
    
  }
  onClone(userData :FormGroup) {
    console.log('Valid?', userData.valid); // true or false
    console.log('Value', userData.value);
    this.userService.cloneUser(userData.value)
    .subscribe((data: ModelPojo)=>{
      console.log(data);
      this.router.navigate(['/success-component']);
    }) 
 }

}
