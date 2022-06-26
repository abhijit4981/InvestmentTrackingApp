import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private companyService:CompanyService, private router:Router) { }
  longText:string;
  ngOnInit(): void {
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    this.longText ="Do you really want to delete this contact "+mobileNumber;
  }
  deleteModel(){
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    console.log("inside delete"+mobileNumber);
    this.companyService.deleteModel(mobileNumber)
    .subscribe((data: any) => { 
      console.log(data);
      this.router.navigate(['viewuser-component']);
    });
  }
  cancle(){
    this.router.navigate(['viewuser-component']);
  }

}
