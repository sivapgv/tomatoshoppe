import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAddcustomer } from 'src/app/IAddcustomer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent implements OnInit {

  route: string = "";
  addCustomer!: IAddcustomer;
  id!: number;

  constructor(private _activate: ActivatedRoute, private _customerservice: CustomersService) { }

  ngOnInit(): void {
    this.id = this._activate.snapshot.params["route"];
    alert(this.id);
    this._customerservice.getCustomer(this.id).subscribe(data => {
      this.addCustomer = data;
    })
  }

}
