import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  searchId: number | undefined;
  product: Product | undefined;

  constructor(private apiService: ApiService, private router: Router) {}

  buscarProducto() {
    if (this.searchId) {
      this.apiService.getProductoById(this.searchId).subscribe(data => {
        this.product = data;
      });
    }
  }

  viewProductDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}