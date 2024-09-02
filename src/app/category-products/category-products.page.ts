import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage implements OnInit {
  category: string = '';
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category')!;
    this.apiService.getProductsByCategory(this.category).subscribe(data => {
      this.products = data;
    });
  }

  viewProductDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}