import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  successMessage;
  info;
  shippingOption;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.shippingOption = this.cartService.shippingOption;
  }

  onSubmit(customData) {
    // process checkout data here
    this.items = this.cartService.clearItems();
    this.checkoutForm.reset();
    this.successMessage = "Your order has been submitted, Thank you.";
    this.info = customData;
  }
}
