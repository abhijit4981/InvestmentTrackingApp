import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Models } from 'src/app/models/models.component';
import { ModelPojo } from 'src/app/models/user.model';
import { CompanyService } from 'src/app/services/company.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
  dataSource : MatTableDataSource<ModelPojo> = new MatTableDataSource<ModelPojo>([]);
  displayedColumns: string[] = ['companySequence', 'companyName', 'companySector','companyType','companyCurrentPrice','update','clone','delete'];

  constructor(private companyService:CompanyService , private router:Router) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void { 
    this.showUsers();
  }
  showUsers() {
    console.log("Calling rest call to get all users..");
    
    this.companyService.getAllModels()
    .subscribe((data: Models)=>{
      console.log(data);
      const blob = new Blob([JSON.stringify(data)], {type : 'application/json'});
      //saveAs(blob, 'abc.json');
      this.dataSource = new MatTableDataSource(data.modelPojoList);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    })  
      
  }
  onDelete(user:ModelPojo){
    console.log("Calling rest call to update.."+user);
    this.router.navigate(['/deletecompany/',user.companyId]);
  }
  onUpdate(user:ModelPojo){
    console.log("Calling rest call to update.."+user);
    this.router.navigate(['/updatecompany/',user.companyId]);
  }
  onClone(user:ModelPojo){
    console.log("Calling rest call to clone.."+user);
    this.router.navigate(['/clonecompany/',user.companyId]);
  }
  applyFilter(event: Event) {
    let filterValue=(event.target as HTMLInputElement).value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

