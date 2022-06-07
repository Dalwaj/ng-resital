import { Component, OnInit } from '@angular/core';
import { Product } from "../model-product/Product";
import {ActivatedRoute} from "@angular/router";
import {PRODUCTS} from "../model-product/AllProducts";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product: Product | undefined;

  constructor(private route : ActivatedRoute) {}

  ngOnInit() {
    let productId: string | null = this.route.snapshot.paramMap.get('id');
    this.product = PRODUCTS.find(product => product.id.toString() == productId);
  }
}
