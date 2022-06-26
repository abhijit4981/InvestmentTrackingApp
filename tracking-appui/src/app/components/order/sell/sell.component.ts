import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Models } from 'src/app/models/models.component';
import { Order } from 'src/app/models/order.model';
import { Orders } from 'src/app/models/orders.model';
import { ModelPojo } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  dataSource : MatTableDataSource<Order> = new MatTableDataSource<Order>([]);
  displayedColumns: string[] = ['companyName', 'companyBroughtQuantity','sell'];
  constructor(private orderService:OrderService , private router:Router) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void { 
    this.showUsers();
  }
  showUsers() {
    console.log("Calling rest call to get all users..");
    
    this.orderService.getAllOrders()
    .subscribe((data: Orders)=>{
      console.log(data.orderList);
      this.dataSource = new MatTableDataSource(data.orderList);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    })  
      
  }
  onSale(user:ModelPojo){
    console.log("Calling rest call to update.."+user);
    this.router.navigate(['/sellcompany/',user.companyId]);
  }
  applyFilter(event: Event) {
    let filterValue=(event.target as HTMLInputElement).value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
