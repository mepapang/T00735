import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  constructor(private productService : ProductService,private router: Router,private messageService: MessageService) { }

  ngOnInit() {
  }
  onEdit(row) {
    this.productService.selectedCustomer = row;
    this.router.navigateByUrl('/edit');
  }

  onDel(id,index){
    this.productService.deleteOrderApi(id).subscribe( val => {
      if(val['message'] === "success"){
        this.productService.detailList.splice(index,1);
        this.messageService.add({severity:'success', summary: 'ข้อความจากระบบ', detail:'ลบสำเร็จ'});
      }
    });
  }

}
