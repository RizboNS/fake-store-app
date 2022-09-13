import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/models/iproduct.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [];
  @Input() category = '';
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    if (this.category === 'all') {
      this.initAllProducts();
    } else if (this.category === 'mens') {
      this.initMensProducts();
    } else if (this.category === 'womans') {
      this.initWomensProducts();
    }
  }
  initAllProducts() {
    this.productsService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.products.forEach((product) => {
          product.qtySelected = 0;
        });
      },
    });
  }
  initMensProducts() {
    this.productsService.getMensClothingProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.products.forEach((product) => {
          product.qtySelected = 0;
        });
      },
    });
  }
  initWomensProducts() {
    this.productsService.getWomensClothingProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.products.forEach((product) => {
          product.qtySelected = 0;
        });
      },
    });
  }
  removeOne(i: number) {
    if (this.products[i].qtySelected > 0) {
      this.products[i].qtySelected--;
    }
  }
  addOne(i: number) {
    if (this.products[i].rating.count > this.products[i].qtySelected) {
      this.products[i].qtySelected++;
    }
  }
}
