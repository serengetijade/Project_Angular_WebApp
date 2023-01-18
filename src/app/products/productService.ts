import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map } from "rxjs";
import { IProduct } from "./product";

//Define a service by using the @Injectable 
@Injectable({
    providedIn: 'root'          //'root' is the base class of this application (defined in app.component.ts)
})
export class ProductService {   //This service encapsulates the data access features. 
    private productUrl = './api/products.json';     //define a property that holds the Url to access the relational database
    
    //Define the constructor
    constructor(private http: HttpClient) {};

    getProducts():Observable<IProduct[]> { 
        //The return type is an observable array of type IProduct objects
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log("All: ", JSON.stringify(data))),
            catchError(this.handleError)
        )
        //this.http.get = syntax to make an http get request
        //<IProduct[]> = declares the expeced return type: an array of IProduct objects
        //(this.productUrl) is a property of the ProductService, it is the URL variable defined above
        //.pipe allows for multiple function calls an encapuslates them
        //tap = access the emitted item without modifying it. The tap operator takes in an arrow function. The parameter is the emitted data and the function defines what we want to do with that data.
        //data => console.log("...") creates a console log
        //catchError(this...) will catch an error only from this occcurance.
    }

    getProduct(id: number): Observable<IProduct | undefined> {        
        return this.getProducts()
            .pipe(
                map((products: IProduct[]) => products.find(p => p.productId === id))
            );
            //Get a list of all the products and the use .pipe and map to get a specific product from the list that mathes the provided id parameter.
    }

    handleError(err:HttpErrorResponse){
        let errorMessage= '';
        if (err.error instanceof ErrorEvent){
            //A client-side or network error occurred:
            errorMessage = `An error occurred:  ${err.error.message}`;
        }
        else {
            //The backend returned an unsuccessful response code: 
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }
}