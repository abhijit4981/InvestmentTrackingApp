import { Component, OnInit } from '@angular/core';
import { LivestockdataService } from 'src/app/services/livestockdata.service';

@Component({
  selector: 'app-nselive',
  templateUrl: './nselive.component.html',
  styleUrls: ['./nselive.component.css']
})
export class NseliveComponent implements OnInit {

  companyDetails:any;
  getCompanyQuoteEquityDetails:any;
  getCompanyQuoteEquityDetailsWithTradeInfo:any;
  getCompanyQuoteForChartByIndex:any;
  constructor(private nseData:LivestockdataService) { }

  ngOnInit(): void {
    console.log("calling NSE to fetch details in component")
    this.nseData.getCompanyMetaDetails('ADANIPOWER')
    .subscribe((data: any)=>{
      this.companyDetails = data;
    });
    this.nseData.getCompanyQuoteEquityDetails('ADANIPOWER')
    .subscribe((data: any)=>{
      this.getCompanyQuoteEquityDetails = data;
    });
    this.nseData.getCompanyQuoteEquityDetailsWithTradeInfo('ADANIPOWER')
    .subscribe((data: any)=>{
      this.getCompanyQuoteEquityDetailsWithTradeInfo = data;
    });
    this.nseData.getCompanyQuoteForChartByIndex('ADANIPOWER')
    .subscribe((data: any)=>{
      this.getCompanyQuoteForChartByIndex = data;
    });
  }

}
