import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { ModelPojo } from 'src/app/models/user.model';
import { CompanyService } from 'src/app/services/company.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-buycompany',
  templateUrl: './buycompany.component.html',
  styleUrls: ['./buycompany.component.css']
})
export class BuycompanyComponent implements OnInit {
  userForm: FormGroup;
  order: Order = new Order() ;
  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,private companyService:CompanyService,private orderService:OrderService, private router:Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      companyName: new FormControl(''),
      companyBroughtQuantity: new FormControl('')
    });
    let id = parseInt(this.route.snapshot.params['id']);
    //rest call to get details of this user
    this.companyService.getModelBasedOnId(id)
    .subscribe((data: ModelPojo)=>{
      console.log(data);
      //update the user form with model details
      this.userForm.controls['companyName'].setValue(data.companyName);
    }) 
  }
  onSubmit(userData :FormGroup) {
    let id = parseInt(this.route.snapshot.params['id']);
    this.order.compId = id;
    this.order.companyName= userData.value.companyName;
    this.order.companyBroughtQuantity= userData.value.companyBroughtQuantity;
    console.log('Valid?', userData.valid); // true or false
    console.log('Value', userData.value);
    this.orderService.createOrder(this.order)
    .subscribe((data: Order)=>{
      console.log(data);
      this.router.navigate(['/success-component']);
    }) 
 }

}
