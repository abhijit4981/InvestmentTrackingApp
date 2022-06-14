import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CloneuserComponent } from './components/companies/cloneuser/cloneuser.component';
import { DeleteuserComponent } from './components/companies/deleteuser/deleteuser.component';
import { RegisterComponent } from './components/companies/register/register.component';
import { UpdateuserComponent } from './components/companies/updateuser/updateuser.component';
import { ViewusersComponent } from './components/companies/viewusers/viewusers.component';
import { BuyComponent } from './components/order/buy/buy.component';
import { SellComponent } from './components/order/sell/sell.component';
import { BuycompanyComponent } from './components/order/buycompany/buycompany.component';
import { SellcompanyComponent } from './components/order/sellcompany/sellcompany.component';
import { SuccessComponent } from './components/companies/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewusersComponent,
    UpdateuserComponent,
    DeleteuserComponent,
    CloneuserComponent,
    BuyComponent,
    SellComponent,
    BuycompanyComponent,
    SellcompanyComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
