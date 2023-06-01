import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product_config } from 'src/app/api-config';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }


  getProducts(){
    return this.http.get(`${environment.base_api_url}${product_config.getProduct_api}`)
  }
  getProductDetails(id : any){
    return this.http.get(`${environment.base_api_url}${product_config.productDetails_api}${id}`)
  }
  getProductType(){
  return this.http.get(`${environment.base_api_url}${product_config.productType_api}`)

}
}
