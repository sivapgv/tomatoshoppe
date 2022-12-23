import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { SalesentryComponent } from './features/salesentry/salesentry.component';
import { FooterComponent } from './features/footer/footer.component';
import { CustomersComponent } from './features/customers/customers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddcustomerComponent } from './features/addcustomer/addcustomer.component';
import { CustomerviewComponent } from './features/customerview/customerview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SalesentryComponent,
    FooterComponent,
    CustomersComponent,
    AddcustomerComponent,
    CustomerviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
