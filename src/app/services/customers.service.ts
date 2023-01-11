import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddcustomer } from '../IAddcustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private _url = "http://localhost:3000/customerlist";
  private _geturl = "http://localhost:3000/customer";
  private _salesurl = "http://localhost:3000/salesmaster";
  private _billnourl = "http://localhost:3000/salesmaster/0";


  constructor(private _httpClient:HttpClient) { }

  getAllCustomer(): Observable<any>{
    return this._httpClient.get<any>(this._url);
  }

  saveCustomer(customer: any): Observable<any> {
    return this._httpClient.post(this._url, customer);
  }

  getCustomer(id: number): Observable<any> {
    return this._httpClient.get<any>(this._geturl + "/" + id)
  }

  // getSalesId(id: number): Observable<any> {
  //   return this._httpClient.get<any>(this._salesurl + "/" + id)
  // }

  updateCustomer(customer: any, id: number): Observable<any> {
    return this._httpClient.put(this._geturl + "/" + id, customer);
  }

  saveSalesentry(sales: any): Observable<any> {
    return this._httpClient.post(this._salesurl, sales);
  }

  getBillno(): Observable<any> {
    return this._httpClient.get<any>(this._billnourl);
  }
 
  
}
