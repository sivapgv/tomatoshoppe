export interface ISalesentry {
    id: number;
    billno: number;
    date:string;
    customerid: number;
    comission: number;
    rent: number;
    credit: number;
    wages: number;
    toll: number;
    debit: number;
    refname: string;
    totalamount: number;
    inwards: [{
        productname: string;
		kgs: number;
		pack: number;		
		rate: number;
		amount: number;
    }];
    outwards: [{
        customerid: number;
        productname: string;
        kgs: number;
        pack: number;		
        rate: number;
        amount: number;
    }];
}