import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ProductService } from 'src/Services/product.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	cataImg = [62, 83, 466, 965, 982, 1043].map((n) => `https://picsum.photos/id/${n}/900/500`);
	myCata = ['Cata1', 'Cata2', 'Cata3', 'Cata4', 'Cata5']
	images = [62, 83, 466, 965, 982, 1043, 738, 230, 300, 844, 222, 111].map((n) => `https://picsum.photos/id/${n}/900/500`);
	images_popular = [62, 83, 466, 965].map((n) => `https://picsum.photos/id/${n}/900/500`);
	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;
	constructor(private _productService: ProductService, private route : Router) { }

	@ViewChild('carousel', { static: true }) carousel?: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel?.cycle();
		} else {
			this.carousel?.pause();
		}
		this.paused = !this.paused;
	}
	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

	public productType: any
	public allProd: any
	ngOnInit(): void {
		this._productService.getProductType().subscribe((res: any) => {
			console.log(res);
			this.productType = res
		})

		this._productService.getProducts().subscribe((res: any) => {
			this.allProd = res.splice(0,4)
			console.log(this.allProd);
			
		})
	}
	onProductDetails(id : number){
this.route.navigate([`product/product-details/${id}`])
	}
}
