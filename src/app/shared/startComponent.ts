import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: 'starComponent',
    templateUrl: './starComponent.html',
    styleUrls: ['./starComponent.css'],
})
export class starComponent implements OnChanges {   //implement a built in interface
    @Input() rating: number = 0;   //Use the @input decorator in this nested component in order to receive info from the container. 
    cropWidth: number= 75;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;   //Crop the display of the starts based on the rating (this will cut off stars)
    }

    onClick() {   //this method  is void because it doesn't return anything
        console.log(`The rating ${this.rating} was clicked.`);  //Use ` ` backticks. ${this.rating} is a JQuery template literal. A template literal allows us to use a placeholder to insert an expression within a string. 
        this.ratingClicked.emit(`The rating ${this.rating} was clicked.`);  //Use ` ` backticks. ${this.rating} is a JQuery template literal. A template literal allows us to use a placeholder to insert an expression within a string. 
        this.notify.emit('clicked');
    }

}