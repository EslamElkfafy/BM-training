import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root',

})
export class ProductService {
  apiUrl = 'https://dummyjson.com/products';

  constructor(private _http : HttpClient) { }
  getAllProducts () {
    return this._http.get<Products>(this.apiUrl);
  }
}
