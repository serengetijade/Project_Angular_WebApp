import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';
import { Router } from '@angular/router';
import { ProductService } from './productService';

@Component({
  //selector: 'pm-product-detail',   //the CLI generated the selector property here. The selector property is only required if the component will be nested within another component.
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage = ''
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
      //create a constant named id
      //Number = the number function will convert the string parameter to a number.
      //route = the instance of the ActivatedRouteSnapshot
      //.snapshot = = route information at a single point in time
      //.paramMap = a built-in property of the ActivatedRouteSnapshot that accesses object parameter values
      //.get = a built-in function
      //('id') = the parameter name to get
    if (id)
    {
      this.getProduct(id);   
    }
  }

  getProduct(id: number): void {
    //call the getProduct function fromt he prouctService class and pass in the id. To use a method from another class, must first add an import statment to import that class.
    this.productService.getProduct(id).subscribe({    //.subscribe is a built in function to send the http get request and receive notifications from the observable. Note that an HTTP request only emits once.
      next: product => this.product = product,
      error: err => this.errorMessage = err,
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}