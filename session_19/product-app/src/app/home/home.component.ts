import { Component, OnDestroy } from '@angular/core';
import { Product } from '../../shared/models/product';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy {
  products!: Product[];
  searchControl = new FormControl('');
  private searchSubscribtion: Subscription;
  private productSubscribtion: Subscription;

  constructor(private _ProductService: ProductService) {
    this.productSubscribtion = this._ProductService
      .getAllProducts()
      .subscribe((response) => {
        this.products = response.products;
        if (window.localStorage.getItem('dataProducts') !== null) {
          this.products = JSON.parse(
            window.localStorage.getItem('dataProducts')!
          );
        } else {
          this.products = response.products;
          window.localStorage.setItem(
            'dataProducts',
            JSON.stringify(this.products)
          );
        }
      });
    this.searchSubscribtion = this.searchControl.valueChanges.subscribe(
      (result) => {
        this.products = JSON.parse(
          window.localStorage.getItem('dataProducts')!
        );
        if (result !== null) {
          this.products = this.products.filter((item: Product) =>
            item.title.includes(result)
          );
        }
      }
    );
  }
  ngOnDestroy(): void {
    if (this.productSubscribtion) {
      this.productSubscribtion.unsubscribe();
    }
    if (this.searchSubscribtion) {
      this.searchSubscribtion.unsubscribe();
    }
  }
}
   
