import { Component, OnInit } from '@angular/core';
import {Product} from "../model-product/Product";
import {PRODUCTS} from "../model-product/AllProducts";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listProducts: Product[] | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.listProducts = PRODUCTS;
  }

  goToProduct(product: Product){
    this.router.navigate(["/resital","products", product.id]);
  }

}
