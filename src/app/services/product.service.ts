import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Orders } from '../models/orders';
import { tap } from 'rxjs/operators';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  detailList: Orders[] =[];
  selectedCustomer: number;
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<Product[]>('/workshop-api/api/product');
  }
  getCustomer(){
    return this.http.get<Customer[]>('/workshop-api/api/customer');
  }

  getDetail(condition: any) {
    const params = new HttpParams({ fromObject: condition });
    return this.http
      .get<Orders[]>('/workshop-api/api/orders/queryOrderByCondition', {
        params
      })
      .pipe(
        tap(response => {
          this.detailList = response;
        })
      );
  }
  getOrder(id){
    return this.http.get<Orders>('/workshop-api/api/orders/'+id);

  }

  editOrderApi(payload: Orders){
    return this.http.put<Orders>('/workshop-api/api/orders', payload).subscribe();
  }

  addOrderApi(payload: Orders) {
     return this.http.post<Orders>('/workshop-api/api/orders', payload).subscribe(); //ต้อง subscribe เพราะเป็น Observeable
  }

  deleteOrderApi(id){
    return this.http.delete<Orders>('/workshop-api/api/orders/'+id);
  }


}
