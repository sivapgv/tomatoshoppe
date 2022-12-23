import { Component, OnInit } from '@angular/core';
import { IAddcustomer } from 'src/app/IAddcustomer';
import { CustomersService } from 'src/app/services/customers.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})

export class AddcustomerComponent implements OnInit   {
 
  addCustomer: IAddcustomer[] = [] as IAddcustomer[];
  editCustomer!: IAddcustomer;
   
  id: number = 0;

  customername!: string;
  customertype!: string;
  address!: string;
  outletarea!: string;
  phonenumber!: number;
  tinnumber!: number;

  constructor(private _customerservice: CustomersService, private _activate: ActivatedRoute) { }

    ngOnInit(): void {
        if(this.id != undefined) {
      this.id = this._activate.snapshot.params["route"];
      alert(this.id);
      this._customerservice.getCustomer(this.id).subscribe(data => {
        if (data) {
          this.customername = data.customername;
          this.customertype = data.customertype;
          this.address = data.address;
          this.outletarea = data.outletarea;
          this.phonenumber = data.phonenumber;
          this.tinnumber = data.tinnumber;
        }
      })
    }
    // else {

    // }

  }

    saveCustomer(f: NgForm): void {
      this._customerservice.saveCustomer(f.value).subscribe(data => {
        this.addCustomer.push(f.value);
        alert("Customer added successfully..");
        f.reset();
      })
    }
 }
