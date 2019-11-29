import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Customer } from 'src/app/models/customer';
import { Orders } from 'src/app/models/orders';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  formAdd: FormGroup;
  productList : Product[] =[];
  product: Product[] = [];
  customerList : Customer[] = [];
  customer: Customer[] = [];
  orderList: Orders[];
  
  constructor(private productService: ProductService,private messageService: MessageService) { }

  ngOnInit() {
    //------------------ Set Form ------------------------------------
    this.formAdd = new FormGroup({
      orderId: new FormControl(''),
      customerId: new FormControl('',Validators.required),
      productId: new FormControl('',Validators.required),
      amount: new FormControl('',Validators.required),
      orderDate: new FormControl(''),
      status: new FormControl('true'),
      total: new FormControl('')
    });

    // ---------- Get Product List ---------------------------------------
    this.productService.getProduct().subscribe( list => {
      this.productList = list.map( data => {
        return { productId : data.productId , productName: data.productName, price:data.price}
      });
    });

    // ---------- Get Customer List ---------------------------------------
    this.productService.getCustomer().subscribe(listCus => {
      this.customerList = listCus.map( dataCus => {
        return { customerId : dataCus.customerId, fullName:dataCus.fullName}
      });
    });


    //------ patchValue in Edit -----------------
    const id = this.productService.selectedCustomer;
    if (id) {
    this.productService.getOrder(id).subscribe(listData => {
        
          this.formAdd.patchValue({ //เป็นการ set value
            ...listData,
            customerId: {
              customerId: listData.customer.customerId,
                fullName: listData.customer.fullName
            },
            productId: {
                productId: listData.product.productId,
                productName: listData.product.productName,
                price: listData.product.price,
            },
            amount: listData.amount,
            status: (listData.status) === 'Y' ? true:false,
            orderDate: new Date(listData.orderDate),
            orderId: id
          });
        }
      
    );}
  }

  // -------- Add & Edit Form--------------------------
  onAdd(formAdd : FormGroup){
    if(formAdd.valid){
      if(this.productService.selectedCustomer){
        let data  = formAdd.getRawValue();
        
        data = {
          customer: {customerId: data.customerId.customerId},
          amount: data.amount,
          product: {productId: data.productId.productId},
          orderDate: (data.orderDate).toISOString(),
          status: (data.status) === true ? 'Y':'N',
          orderId : data.orderId
        };
        this.productService.editOrderApi(data);
        this.messageService.add({severity:'success', summary: 'ข้อความจากระบบ :', detail:'แก้ไขข้อมูลสำเร็จ'});
      }
      else{
        let data  = formAdd.getRawValue();
        data = {
          customer: {customerId: data.customerId.customerId},
          amount: data.amount,
          product: {productId: data.productId.productId},
          orderDate: (data.orderDate).toISOString(),
          status: (data.status) === true ? 'Y':'N',
        };
        this.productService.addOrderApi(data);
        this.messageService.add({severity:'success', summary: 'ข้อความจากระบบ :', detail:'เพิ่มข้อมูลสำเร็จ'});
      }
    }
  }

  onReset(){
    this.formAdd.patchValue({
      orderId: '',
      customerId: '',
      productId: '',
      amount: '',
      orderDate: '',
      total: ''
    });
    
  }

}
