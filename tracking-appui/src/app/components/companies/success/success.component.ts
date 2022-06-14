import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  longText:string ="Task completed successfully";
  constructor(private route:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
  }
  cancle(){
    this.router.navigate(['']);
  }

}
