import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloneuserComponent } from './components/companies/cloneuser/cloneuser.component';
import { DeleteuserComponent } from './components/companies/deleteuser/deleteuser.component';
import { RegisterComponent } from './components/companies/register/register.component';
import { SuccessComponent } from './components/companies/success/success.component';
import { UpdateuserComponent } from './components/companies/updateuser/updateuser.component';
import { ViewusersComponent } from './components/companies/viewusers/viewusers.component';
import { BuyComponent } from './components/order/buy/buy.component';
import { BuycompanyComponent } from './components/order/buycompany/buycompany.component';
import { SellComponent } from './components/order/sell/sell.component';
import { SellcompanyComponent } from './components/order/sellcompany/sellcompany.component';

const routes: Routes = [
  { path: 'register-component', component: RegisterComponent },
  { path: 'view-component', component: ViewusersComponent },
  { path: 'buy-component', component: BuyComponent },
  { path: 'sell-component', component: SellComponent },
  { path: 'success-component', component: SuccessComponent },

  {path: "deletecompany/:id", component: DeleteuserComponent},
  {path: "updatecompany/:id", component: UpdateuserComponent},
  {path: "clonecompany/:id", component: CloneuserComponent},
  {path: "buycompany/:id", component: BuycompanyComponent},
  {path: "sellcompany/:id", component: SellcompanyComponent},

  { path: '',   redirectTo: '/view-component', pathMatch: 'full' },
  { path: '**', component: ViewusersComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
