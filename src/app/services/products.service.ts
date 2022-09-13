import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _url = 'https://fakestoreapi.com/products';
  private _url_mens = `https://fakestoreapi.com/products/category/men's clothing`;
  private _url_womens = `https://fakestoreapi.com/products/category/women's clothing`;
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url);
  }
  getMensClothingProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url_mens);
  }
  getWomensClothingProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url_womens);
  }
}
