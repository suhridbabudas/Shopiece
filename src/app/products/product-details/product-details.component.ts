import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/Services/product.service';
import { Product } from '../Interfaces/product.interfaces';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private _productService: ProductService) { }
  public selectedProduct : Product = {
    id:0,
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

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.paramMap.get('id')
    // console.log(productId);
    this._productService.getProductDetails(productId).subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.selectedProduct = res
      }
    })
  }
}
