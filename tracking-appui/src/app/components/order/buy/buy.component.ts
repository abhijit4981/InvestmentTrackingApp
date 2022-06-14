import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Models } from 'src/app/models/models.component';
import { ModelPojo } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  dataSource : MatTableDataSource<ModelPojo> = new MatTableDataSource<ModelPojo>([]);
  displayedColumns: string[] = ['companySequence', 'companyName', 'companySector','companyType','companyCurrentPrice','buy'];
  constructor(private userService:UserserviceService , private router:Router) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void { 
    this.showUsers();
  }
  showUsers() {
    console.log("Calling rest call to get all users..");
    
    this.userService.getAllModels()
    .subscribe((data: Models)=>{
      console.log(data);
      this.dataSource = new MatTableDataSource(data.modelPojoList);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    })  
      
  }
  onPurchase(user:ModelPojo){
    console.log("Calling rest call to update.."+user);
    this.router.navigate(['/buycompany/',user.companyId]);
  }
  applyFilter(event: Event) {
    let filterValue=(event.target as HTMLInputElement).value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
