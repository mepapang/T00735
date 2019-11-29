import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Orders } from 'src/app/models/orders';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  detailList:[];
  constructor(private detailService: ProductService) { }

  ngOnInit() {
  }
  onDisplay(event){
      this.removeEmpty(event);
      this.detailService.detailList.push(event);
      this.detailService.getDetail(event).subscribe();
    }
  removeEmpty(obj) {
    Object.keys(obj).forEach(key => (obj[key] == null || obj[key] == '') && delete obj[key]);
  }

}
