import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  constructor() { }
  sectorList: string[] = ['Banking', 'Insurance','Mutual Funds','IT','Auto', 'Industrial','Cement', 'Govt Stocks', 'Paint','Electronics','LABs','Film','Steel','Adani Group','Jindal Group','Tata Group','Bajaj Group'];
  typeList : string[] = ['Growth','Long Term','Intraday'];

  getAllSectors(){
    return this.sectorList;
  }
  getAllTypes(){
    return this.typeList;
  }
}
