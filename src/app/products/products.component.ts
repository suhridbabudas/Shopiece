import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/Services/product.service';
import { Product } from './Interfaces/product.interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  itemsPerPage = 16
  currentpage = 0
  totalItems = 0
  constructor(private _productService: ProductService, private route: Router) { }
  public products: Product[] = [
    {
      id: 0,
      Availability: 0,
      Brands: { id: 0, BrandCode: '', BrandName: '', CreatedAt: '', UpdatedAt: '' },
      BrandKey: 0,
      CreatedAt: "",
      Description: "",
      IsInCart: 0,
      IsInWishlist: 0,
      IsNewSeason: 0,
      IsOnOffer: 0,
      IsPopular: 0,
      IsTrending: 0,
      MaxRating: 0,
      Name: "",
      OfferPrice: 0,
      Price: 0,
      ProductCondition: "",
      ProductID: "",
      ProductImageUrl: "",
      ProductsSubTypeKey: 0,
      Rating: 0,
      UpdatedAt: "",
    }
  ]

  ngOnInit(): void {
    this._productService.getProducts().subscribe((res: any) => {
      this.products = res
      console.log(this.products);
      this.totalItems = this.products.length
    })
  }

  onProductDetails(id: any) {
    console.log(id);
    this.route.navigate([`product/product-details/${id}`])
  }


}
