import { Component, inject, signal } from '@angular/core';
import { CategoryService } from '../../../../../core/services/categories/category-service';
import { Category, IProduct } from '../../../../../core/models/i-product';

@Component({
  selector: 'app-featured-categories',
  imports: [],
  templateUrl: './featured-categories.component.html',
  styleUrl: './featured-categories.component.css',
})
export class FeaturedCategoriesComponent {
  private readonly categoryService: CategoryService = inject(CategoryService);
  categoryList = signal<Category[]>([]);
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (res) => {
        this.categoryList.set(res.data);
      },
    });
  }
}
