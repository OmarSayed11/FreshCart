import { Component } from '@angular/core';
import { SliderComponent } from './features/slider/slider.component';
import { NewsLetterComponent } from './features/news-letter/news-letter.component';
import { DealAndNewsComponent } from './features/deal-and-news/deal-and-news.component';
import { FeaturedProductsComponent } from '../../../shared/components/featured-products/featured-products.component';
import { FeaturedCategoriesComponent } from './features/featured-categories/featured-categories.component';

@Component({
  selector: 'app-home',
  imports: [
    SliderComponent,
    NewsLetterComponent,
    DealAndNewsComponent,
    FeaturedCategoriesComponent,
    FeaturedProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
