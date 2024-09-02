import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product: Product | undefined;
  cartItemCount: number = 0;
  showToast: boolean = false;
  toastMessage: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.apiService.getProductoById(+productId).subscribe(data => {
        this.product = data;
      });
    }
  }

  addToCart() {
    this.cartItemCount++;
    this.toastMessage = 'Producto añadido con éxito';
    this.showToast = true;
  }
}