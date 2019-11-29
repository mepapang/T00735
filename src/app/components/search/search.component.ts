import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Orders } from 'src/app/models/orders';
import { Router } from '@angular/router';

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

  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      productId: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      product : new FormControl('')
    });

    this.productService.getProduct().subscribe( list => {
      this.productList = list.map(data => {
        return {productId : data.productId ,productName: data.productName,productDesc : data.productDesc,price:data.price,active:data.active}
      });
    });

  }

  onSearch(form : FormGroup){
    const data = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        productId: form.value.product.productId,
        email:form.value.email
    }
    this.customer.emit(data);
  }

  onReset(){
    this.form.patchValue({
      firstName: '',
      lastName: '',
      product: '',
      email: ''
    });
    this.productService.detailList = [];
  }

  gotoAdd(){
    this.productService.selectedCustomer = null;
    this.router.navigate(['/add']);
  }



}
