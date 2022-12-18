import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { SalesentryComponent } from './features/salesentry/salesentry.component';
import { FooterComponent } from './features/footer/footer.component';
import { CustomersComponent } from './features/customers/customers.component';
import { AddCustomerComponent } from './features/add-customer/add-customer.component';

const routes: Routes = [
  { path: 'home', component: SalesentryComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'add-customer', component: AddCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
