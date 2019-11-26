import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Detail } from 'src/app/models/detail';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output()
  customer = new EventEmitter;

  form : FormGroup ;
  productList: Product[] = [];
  product: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.form = new FormGroup({
      productId: new FormControl(''),
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      product : new FormControl('',[Validators.required])
    });

    this.productService.getProduct().subscribe( list => {
      this.productList = list.map(data => {
        return {productId : data.productId ,productName: data.productName,productDesc : data.productDesc,price:data.price,active:data.active}
      });
    });

  }

  onSearch(form : FormGroup){
    const data : Detail = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        productId: form.value.product.productId,
        email:form.value.email
    }
    this.customer.emit(data);
  }

}
