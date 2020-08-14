import { Component, OnInit } from "@angular/core";
import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products = products;
  sharedProduct = [];
  constructor() {}

  ngOnInit() {}

  share(productName) {
    this.sharedProduct.push(productName);
    window.alert(`${productName}: has been shared`);
    console.log(this.sharedProduct);
  }

  onNotify(productName) {
    window.alert(`You will be notified when: ${productName.name} goes on sale`);
  }
}
