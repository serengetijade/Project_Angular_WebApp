//Import the required 
import { Component, OnDestroy, OnInit } from "@angular/core";     
import { filter, Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./productService";

//Component Decorator (required to make this class into a component)
@Component({
    //selector: "pm-products",                    //the name used in html references
    templateUrl: './productListComponent.html', //use a specific stylesheet
    styleUrls: ['./productListComponent.css'],  //separate multiple stylesheets with commas
})

//Define a class: 
export class ProductListComponent implements OnInit, OnDestroy {      //export means this class can be accessed from outside of this document. 
    pageTitle: string = "Popular Pets of the World";
    filteredProducts: IProduct[] =[];
    products: IProduct[] = [];
    imageWidth: number = 100;
    imageMargin: number = 2;
    showElement: boolean = false;
    errorMessage: string = '';  //Add this in order to use exception handling
    sub!: Subscription;   // can't declare a variable without assigning it a default value. The bang, or exclamation point, tells the TypeScript compiler that we will handle the assignment of this property sometime later. 
    
    //Getter and Setter (used by the filter method)- they are automatically run very frequently.
    private _listFilter: string = ""; //Define a backing variable. Naming convention is to start these with an underscore_
    get listFilter(): string {        //listFilter is the two-way bound variable created by [(ngModel)]='listFilter' in the html. It has whatever value has been input there. 
      return this._listFilter;        //return the value of the listFilter as a backing variable.
    }
    set listFilter(input: string) {   //the setter method requires one parameter
      this._listFilter = input;       //reassign the value of 'input' to be the result of the get listFitler() function
      console.log('In setter: ', input);
      this.filteredProducts = this.performFilter(input); //Call the performFilter function and pass in (two-way bound) listFilter value, and assign it to the filteredProducts array. Because this property is bound to a template, the retrieved data appears in the view.   
    }

    //Class methods
    toggleElement(): void{
        this.showElement = !this.showElement;
    }
    ngOnInit(): void {                //Lifecycle hook
      //this.listFilter = "";         //Add an initial value inside of the input html element.
      this.sub = this.productService.getProducts().subscribe({   //Call the product data service getProducts method. Apply the .subscribe method to send the http get request and receive  notifications from the observable. Note that an HTTP request only emits once. 
        next: products => {           //Use curly brackets with multiple functions. Pass an observer object to the subscribe. This is a KVP: 'next' is the key, the function is the value. 'products' is the emitted item. 
          this.products = products;   //This is the action to take when the observable emits an item. 'this.products' sets the local products property to the returned array of products.    
          this.filteredProducts = this.products;   //Because there is a filter in place, set an initial list value (the full list of products). By putting this inside the next handler function, it will render when the http response is emitted.  
          },   
        error: err => this.errorMessage = err   //This function is executed if the observable fails. 
      })
    }
    ngOnDestroy(): void{
      this.sub.unsubscribe();   //Apply the .unsubscribe() method to end the subscription to the observable. 
    }

    //This function is called by the set method, defined elsewhere, and the parameter (filterBy) is passed in there. 
    performFilter(filterBy: string): IProduct[]{    //This method has one required parameter: a string. It returns the filtered array of products
      filterBy = filterBy.toLowerCase();            //convert everything ot lower case
      return this.products.filter((product:IProduct)=> product.productName.toLocaleLowerCase().includes(filterBy));
          //this.products     start with the full list of products (an array)
          //.filter(...)      apply the built-in filter method and pass in an arrow function
          //product:IProduct  the required parameter of the arrow method: this processes each passed in product
          //product.productName   check the product name of each passed in product
          //.toLocaleLowerCase()  convert the name to lower case
          //.includes         a built in string method
          //(filterBy)        pass this value to the .includes method so that is compared against the product.productName
    }
    //Emit an event
    onNotify(message: string): void{ };   //This method is called by the nested starComponent in productListComponenet.ts
    
    onRatingClicked(message:string): void {
      this.pageTitle = 'Product List: ' + message; 
    }

    //Constructor
    constructor(private productService: ProductService){}
}