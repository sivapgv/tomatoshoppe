import { Component, OnInit } from '@angular/core';
import { ICustomers } from 'src/app/ICustomers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
 
  customers!: ICustomers[];


  constructor(private _customerservice:CustomersService) { }


  ngOnInit(): void {
    this._customerservice.getAllCustomer().subscribe(c => {
      this.customers = c.data;
    })
  }

  // getforms(): void {
  //   let productForm = this.fb.group({
  //     inward: this.fb.fgroup({
  //       billNo: [],
  //       date: Date,
  //       formarName: String,
  //       products: this.fb.array([
          
  //       ])  
  //     })
  //   })
  // }

}
