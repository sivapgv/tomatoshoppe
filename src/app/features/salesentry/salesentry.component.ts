import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IInwards } from 'src/app/IInwards';
import { IOutwards } from 'src/app/IOutwards';
import { ISalesentry } from 'src/app/ISalesentry';
import { FormGroup } from '@angular/forms';
import { ICustomers } from 'src/app/ICustomers';
import { CustomersService } from 'src/app/services/customers.service';


@Component({
  selector: 'app-salesentry',
  templateUrl: './salesentry.component.html',
  styleUrls: ['./salesentry.component.css']
})
export class SalesentryComponent implements OnInit {
 
  salesmaster: any[] = [];
  inwards: IInwards[] = [] as IInwards[];
  outwards: IOutwards[] = [] as IOutwards[];
  customers!: ICustomers[];

    billno!: number;
    date!: string;
    customerid!: number;
    comission!: number;
    rent!: number;
    credit!: number;
    wages!: number;
    toll!: number;
    debit!: number;
    refname!: string;
    totalamount!: number;

    inproductname!: string;
    inkgs!: number;
    inpack!: number;		
    inrate!: number;
    inamount!: number;

    outproductname!: string;
    outkgs!: number;
    outpack!: number;		
    outrate!: number;
    outamount!: number; 

  constructor(private _customerservice: CustomersService) { }

  ngOnInit(): void {
    this._customerservice.getAllCustomer().subscribe(c => {
      this.customers = c.data;
    })
  }

  
   onSelected(value:any): void {
    console.log(value);
		 this.customerid = value;
	}

  saveSalesentry(f: NgForm): void {
     console.log(f.value);
      
     let sales = {
    'billno': f.controls['billno'].value,
    'date': f.controls['date'].value,
    'customerid': this.customerid,
    'comission': f.controls['comission'].value,
    'rent': f.controls['rent'].value,
    'credit': f.controls['credit'].value,
    'wages': f.controls['wages'].value,
    'toll': f.controls['toll'].value,
    'debit': f.controls['debit'].value,
    'refname': f.controls['refname'].value,
    'totalamount': f.controls['totalamount'].value
  };

  let salesentry = {
    'sales': sales,
    'inwards': this.inwards,
    'outwards': this.outwards
  }

      console.log(salesentry);
      this._customerservice.saveSalesentry(salesentry).subscribe(data => {
      this.salesmaster.push(f.value);
      alert("Sales entry added successfully..");
      f.reset();
    })
  }

  addInward(f: NgForm): void {
    // console.log(f.value);
  // //  let sss =  f.controls["forminward"] as FormGroup
      let inward = {
        'productname': f.controls['inproductname'].value,
        'kgs': f.controls['inkgs'].value,
        'rate':f.controls['inrate'].value,
        'pack':f.controls['inpack'].value,
        'amount':f.controls['inamount'].value
      };
    this.inwards.push(inward);
   
    f.controls['inproductname'].reset();
    f.controls['inkgs'].reset();
    f.controls['inrate'].reset();
    f.controls['inpack'].reset();
    f.controls['inamount'].reset();

  }

  addOutward(f: NgForm): void {
    console.log(f.value);
    let outward = {
      'customerid':1,
      'productname': f.controls['outproductname'].value,
      'kgs':f.controls['outkgs'].value,
      'rate':f.controls['outrate'].value,
      'pack':f.controls['outpack'].value,
      'amount':f.controls['outamount'].value
    };
  this.outwards.push(outward);

  f.controls['outproductname'].reset();
  f.controls['outkgs'].reset();
  f.controls['outrate'].reset();
  f.controls['outpack'].reset();
  f.controls['outamount'].reset();

  }

}
