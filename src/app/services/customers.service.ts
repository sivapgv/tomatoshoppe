import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddcustomer } from '../IAddcustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private _url = "http://localhost:3000/customerlist";
 

  constructor(private _httpClient:HttpClient) { }

  getAllCustomer(): Observable<any>{
    return this._httpClient.get<any>(this._url);
  }

  saveCustomer(customer: any): Observable<any> {
    return this._httpClient.post(this._url, customer);
  }

  // deleteCustomer(id: number): Observable<IAddcustomer[]> {
  //   return this._httpClient.delete<IAddcustomer[]>(this._url + "/" + id)
  // }

  getCustomer(id: number): Observable<IAddcustomer> {
    return this._httpClient.get<IAddcustomer>(this._url + "/" + id)
  }

}
