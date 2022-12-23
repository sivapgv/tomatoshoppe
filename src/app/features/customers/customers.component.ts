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
    this._customerservice.getAllCustomer().subscribe(data => {
      this.customers = data.data;
    })
  }

  // deleteCustomer(id: number): void {
  //   let con = confirm("Are you sure want to delete..")
  //   if (con) {
  //     this._customerservice.deleteCustomer(id).subscribe(data => {
  //       let index = this.customers.findIndex(p => p.id == id)
  //       this.customers.splice(index, 1);
  //       alert("Customer is deleted successfully..")
  //     })
  //   }
  // }


}
