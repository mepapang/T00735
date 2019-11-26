import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Detail } from '../models/detail';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [];
  detailList: Detail[] =[];
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<Product[]>('/workshop-api/api/product');
  }

  getDetail(condition: any) {
    const params = new HttpParams({ fromObject: condition });
    return this.http
      .get<Detail[]>('/workshop-api/api/orders/queryOrderByCondition', {
        params
      })
      .pipe(
        tap(response => {
          this.detailList = response;
        })
      );
  }
}
