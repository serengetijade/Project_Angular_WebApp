# Project_Angular_Website
Angular is an open-source web application framework that is useful for adding object-oriented functionality to applications. This project shows a basic web app for displaying  and navigating a list of products. It is meant to highlight back end logic, so styling is minimal. 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Skills Implemented
- <b>Languages and Libraries:</b>
    - Angular was used to embed features into html such as if conditions, for loops, and local variables. It was used to bind values to variables and execute logic using those values. Components and features were created to modularize the design of the application, allowing for the potential to scale or reuse code.
    - Angular Language Service extension is a library available for VS code. It was used to aid debugging and editing.
    - Typescript was used to strongly type objects created in the Angular framework.
    - Javascript 
    - JSON
    - jQuery
    - HTML and CSS
- <b>IDE:</b> VS Code
- <b>CLI:</b>The command line interface was used to efficiently generate components and modules.

# Code Summary
![Angular_Demo](https://github.com/serengetijade/JavaScript/blob/main/Angular-WebApp-Project/src/assets/readmeImages/AngularDemo.gif)

## Objects, Components, Shared Components, and Modules
Classes were created to represent the various objects used in this application: mainly "products". Properties were defined in order to track the name, price, availability, etc of each product. 

Components were added to provide a template for the object, any methods needed, and the required metadata. For example, the [productListComponent](https://github.com/serengetijade/JavaScript/blob/main/Angular-WebApp-Project/src/app/products/productListComponent.ts) was created to display the entire list of available products, as well as handle various user actions. 

In order to organize the application, objects and components were arranged into modules. Each module was assigned the relevant imports and declarations so as to keep things organized. For shared modules, such as the starRating component, exports were added to share that modules components , directives, and/or pipes with other modules. 
https://github.com/serengetijade/JavaScript/blob/49e75dcb5ed45b87922736ff61fe3be171e3bb42/Angular-WebApp-Project/src/app/shared/shared.module.ts#L6-L11

## Life cycle hooks
Lifecycle hooks were implemented to perform needed operations at initiation: the product list uses an imported method to access and render the complete list of products. 
https://github.com/serengetijade/JavaScript/blob/49e75dcb5ed45b87922736ff61fe3be171e3bb42/Angular-WebApp-Project/src/app/products/productListComponent.ts#L40-L52

## HTTP Requests, Observables, and Pipes
As part of the modularization, the logic to get the list of products is included in the products module. The getProducts method uses HTTP get requests to access a json file that contains the complete string of product objects. The getProduct method uses a pipe to get a specific product from the list and map its data to be used when rendering the productDetails template. 
https://github.com/serengetijade/JavaScript/blob/49e75dcb5ed45b87922736ff61fe3be171e3bb42/Angular-WebApp-Project/src/app/products/productService.ts#L16-L37

![Product_Details](https://github.com/serengetijade/JavaScript/blob/main/Angular-WebApp-Project/src/assets/readmeImages/ProductDetails.jpg)

## Error handling
Should an error occur when making the http requests, an error response was added to redirect to the welcome page.
https://github.com/serengetijade/JavaScript/blob/49e75dcb5ed45b87922736ff61fe3be171e3bb42/Angular-WebApp-Project/src/app/products/productService.ts#L39-L51

## Nested components and Directives
As mentioned earlier, the starRating component was created as a shared component. To establish the connection between the starRating component and the container component, the starRating's selector was used as a directive.
https://github.com/serengetijade/JavaScript/blob/e11dc50bbd70f9879cceaac689270748ff5cbad0/Angular-WebApp-Project/src/app/products/productListComponent.html#L51

## Event Binding
The starRating directive, shown above, is also an example of event binding. This function was added to show how event binding can be used to respond to user events, such as clicks.
https://github.com/serengetijade/JavaScript/blob/49e75dcb5ed45b87922736ff61fe3be171e3bb42/Angular-WebApp-Project/src/app/products/productListComponent.ts#L66-L71

https://github.com/serengetijade/JavaScript/blob/49e75dcb5ed45b87922736ff61fe3be171e3bb42/Angular-WebApp-Project/src/app/shared/startComponent.ts#L8-L22
![Event_Binding](https://github.com/serengetijade/JavaScript/blob/main/Angular-WebApp-Project/src/assets/readmeImages/EventDemo.gif)

## Filter using Two-Way Binding and Property Binding
A filter bar was added and two way binding was implemented to display a component property in the template and update that property as the user types. 
https://github.com/serengetijade/JavaScript/blob/49e75dcb5ed45b87922736ff61fe3be171e3bb42/Angular-WebApp-Project/src/app/products/productListComponent.html#L9-L19

The getter and setter were used to get input from the "filter" html element and then return a list of products that match the provided input. 
https://github.com/serengetijade/JavaScript/blob/49e75dcb5ed45b87922736ff61fe3be171e3bb42/Angular-WebApp-Project/src/app/products/productListComponent.ts#L25-L34

The set method calls this performFilter function, which returns the value that is then used for the property binding: 
https://github.com/serengetijade/JavaScript/blob/49e75dcb5ed45b87922736ff61fe3be171e3bb42/Angular-WebApp-Project/src/app/products/productListComponent.ts#L54-L57

Property binding was used extensively throughout the project and appears in multiple documents. 

## Credit
This projects was based off a tutorial by [Deborah Kurata](https://app.pluralsight.com/library/courses/angular-2-getting-started-update/table-of-contents)