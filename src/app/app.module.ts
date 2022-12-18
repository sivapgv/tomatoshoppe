import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { SalesentryComponent } from './features/salesentry/salesentry.component';
import { FooterComponent } from './features/footer/footer.component';
import { CustomersComponent } from './features/customers/customers.component';
import { AddCustomerComponent } from './features/add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SalesentryComponent,
    FooterComponent,
    CustomersComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
