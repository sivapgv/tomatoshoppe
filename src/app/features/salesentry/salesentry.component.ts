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
 

    selectProductName = [
        {id: 1, type: "Tomato"},
        {id: 2, type: "Drumstick"},
        {id: 3, type: "GreenChilly"},
        {id: 4, type: "GreenPeas"},
        {id: 5, type: "Brinjal"},
    ];

    salesmaster: any[] = [];
    inwards: IInwards[] = [] as IInwards[];
    outwards: IOutwards[] = [] as IOutwards[];
    customers!: ICustomers[];
    farmer!: any[];
    businessMan!: any[];
    totalInAmount!: number ;
    totalInKg!: number;
    totalInpack!: number;
    totalOutKg!: number;
    totalOutPack!: number;

    id = 1 ;
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
        this.farmer = this.customers.filter(farmer => farmer.customertype == "Farmer")
        this.businessMan = this.customers.filter(business => business.customertype == "BusinessMan")
      
        // this._customerservice.getSalesId(this.id).subscribe( data => {
        //   alert(JSON.stringify(this.customers));
        //   console.log(data);
        //   if(data) {

        //   }
        //   else {
        //     this.billno = data[0].billno;
        //   }
        // })

        // this.inwards.forEach(element => {
        //   console.log(element);
        //   this.totalInAmount = element.amount + this.totalInAmount ;
        //   console.log(this.totalInAmount)
        // });

        // this.billLength = this.customers.length;
        // // alert(this.billLength);
        //  this.billno = this.billLength + 1;
        //  // alert(this.billno);
        //  // alert(JSON.stringify(this.customers));
      });
      this._customerservice.getBillno().subscribe(data => {
          this.billno = Number(data['data'][0]['billno'])+1;
      });
    }
  
    onSelected(value:any): void {
      this.customerid = value;
    }

    selectBusinessman(value:any): void {
        this.customerid = value;
    }

    onBlurinproductname(f: NgForm) {
      if(f.controls['inproductname'].value == "Tomato") {
          f.controls['inkgs'].disable();
      }
      else{
          f.controls['inkgs'].enable();
      }
    }

    onBlurOutproductname(f: NgForm) {
      if(f.controls['outproductname'].value == "Tomato") {
        f.controls['outkgs'].disable();
    }
    else{
        f.controls['outkgs'].enable();
    }
    }

    onBlurInkgs(f: NgForm) {
      if(f.controls['inrate'].value == undefined) {
        if(f.controls['inkgs'].value != 0 && f.controls['inkgs'].value != undefined ){
            f.controls['inpack'].reset();
            f.controls['inamount'].reset();
          }
        } 
    else
        {
          f.controls['inpack'].reset();
          f.controls['inamount'].reset();
          if(f.controls['inpack'].value == undefined) {
          if(f.controls['inrate'].value != undefined && f.controls['inkgs'].value !=  undefined) {
          this.inamount = (f.controls['inrate'].value * f.controls['inkgs'].value);
            }
          }
      }
    }

    onBlurInpack(f: NgForm) {
      if(f.controls['inrate'].value == undefined) {
        if(f.controls['inpack'].value != 0 && f.controls['inpack'].value != undefined ){
        f.controls['inkgs'].reset();
        f.controls['inamount'].reset();
        }
       }
       else {
        f.controls['inkgs'].reset();
        f.controls['inamount'].reset();
        if(f.controls['inkgs'].value == undefined) {
          if(f.controls['inrate'].value != undefined && f.controls['inpack'].value != undefined) {
            this.inamount = (f.controls['inrate'].value * f.controls['inpack'].value)
           }
         }
       }
    }
     
    onBlurInrate(f: NgForm) {
      if(f.controls['inrate'].value != undefined) {
        if(f.controls['inpack'].value == undefined) {
          if(f.controls['inrate'].value != undefined && f.controls['inkgs'].value !=  undefined) {
            this.inamount = (f.controls['inrate'].value * f.controls['inkgs'].value)
          }
        }
        else {
          if(f.controls['inkgs'].value == undefined) {
            if(f.controls['inrate'].value != undefined && f.controls['inpack'].value != undefined) {
              this.inamount = (f.controls['inrate'].value * f.controls['inpack'].value)
             }
           }
         }
        }
        else {
          f.controls['inamount'].reset();
        }
    }

    onBlurOutkgs(f: NgForm) {
        if(f.controls['outrate'].value == undefined) {
        if(f.controls['outkgs'].value != 0 && f.controls['outkgs'].value != undefined ){
            f.controls['outpack'].reset();
            f.controls['outamount'].reset();
          }
        } 
    else
        {
          f.controls['outpack'].reset();
          f.controls['outamount'].reset();
          if(f.controls['outpack'].value == undefined) {
            if(f.controls['outrate'].value != undefined && f.controls['outkgs'].value !=  undefined) {
          this.outamount = (f.controls['outrate'].value * f.controls['outkgs'].value)
            }
          }
      }
    }

    onBlurOutpack(f: NgForm) {
      if(f.controls['outrate'].value == undefined) {
      if(f.controls['outpack'].value != 0 && f.controls['outpack'].value != undefined ){
      f.controls['outkgs'].reset();
      f.controls['outamount'].reset();
      }
     }
     else {
      f.controls['outkgs'].reset();
      f.controls['outamount'].reset();
      if(f.controls['outkgs'].value == undefined) {
        if(f.controls['outrate'].value != undefined && f.controls['outpack'].value != undefined) {
          this.outamount = (f.controls['outrate'].value * f.controls['outpack'].value)
         }
       }
     }
    }

    onBlurOutrate(f: NgForm) {
      if(f.controls['outrate'].value != undefined) {
      if(f.controls['outpack'].value == undefined) {
        if(f.controls['outrate'].value != undefined && f.controls['outkgs'].value !=  undefined) {
          this.outamount = (f.controls['outrate'].value * f.controls['outkgs'].value)
        }
      }
      else {
        if(f.controls['outkgs'].value == undefined) {
          if(f.controls['outrate'].value != undefined && f.controls['outpack'].value != undefined) {
            this.outamount = (f.controls['outrate'].value * f.controls['outpack'].value)
           }
         }
       }
      }
      else {
        f.controls['outamount'].reset();
      }
    }
  
    saveSalesentry(f: NgForm): void {

    let sales = {
      //'billno': f.controls['billno'].value,
      'billno': this.billno,
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
    };
      this._customerservice.saveSalesentry(salesentry).subscribe(data => {
      this.salesmaster.push(f.value);
      alert("Sales entry added successfully..");
      f.reset();
      })
    }

    addInward(f: NgForm): void {
  
      // if(f.controls['inpack'].value != 0) {
      //    this.inkgs = 0;
      // }
      // if(f.controls['inkgs'].value != 0) {
      //   this.inpack = 0;
      // }

       if(f.controls['inpack'].value != undefined) {
          f.controls['inkgs'].reset();
        }
        if(f.controls['inkgs'].value != undefined) {
          f.controls['inpack'].reset();
        }

        let inward = {
          'productname': f.controls['inproductname'].value,
          'pack':f.controls['inpack'].value,
          'kgs': f.controls['inkgs'].value,
          'rate':f.controls['inrate'].value,
          'amount':f.controls['inamount'].value
        };
      this.inwards.push(inward);
     
      f.controls['inproductname'].reset();
      f.controls['inkgs'].reset();
      f.controls['inrate'].reset();
      f.controls['inpack'].reset();
      f.controls['inamount'].reset();

      const totAmount = this.inwards.reduce((accumulator, obj) => {
        return accumulator + obj.amount; }, 0);
     
      const totKG = this.inwards.reduce((accumulator, obj) => {
        return accumulator + obj.kgs; }, 0);

      const totPack = this.inwards.reduce((accumulator, obj) => {
        return accumulator + obj.pack; }, 0);


        this.totalInAmount = totAmount ;
        this.totalInKg = totKG;
        this.totalInpack = totPack ;

        alert(this.totalInAmount);
        alert(this.totalInKg);
        alert(this.totalInpack);

        this.comission = Math.round(this.totalInAmount * (10/100));
        this.wages = Math.round(this.totalInAmount * (3/100));
        this.toll = Math.round(this.totalInAmount * (1/100));

    }

    addOutward(f: NgForm): void {
      let outward = {
        'customerid':this.customerid,
        'productname': f.controls['outproductname'].value,
        'kgs':f.controls['outkgs'].value,
        'rate':f.controls['outrate'].value,
        'pack':f.controls['outpack'].value,
        'amount':f.controls['outamount'].value
      };
        this.outwards.push(outward);

       
        const totKG = this.outwards.reduce((accumulator, obj) => {
          return accumulator + obj.kgs; }, 0);
  
        const totPack = this.outwards.reduce((accumulator, obj) => {
          return accumulator + obj.pack; }, 0);


          
          this.totalOutKg = totKG;
          this.totalOutPack = totPack ;

      if(this.totalInKg >= this.totalOutKg || this.totalInKg == this.totalOutKg) {

      }


        //this.totalOutKg = this.totalInKg - f.controls['outkgs'].value;


        f.controls['outproductname'].reset();
        f.controls['outkgs'].reset();
        f.controls['outrate'].reset();
        f.controls['outpack'].reset();
        f.controls['outamount'].reset();
        
    }



}
