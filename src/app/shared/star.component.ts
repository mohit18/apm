import { Component, OnInit, OnChanges, SimpleChanges, Input, Output,EventEmitter } from '@angular/core';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnInit,OnChanges {
    @Input() rating: number= 2 ;
    starWidth: number ;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); 
    
    constructor() { }
    ngOnChanges(changes: SimpleChanges): void {
       this.starWidth= this.rating * 75 / 5;
    }

    ngOnInit() { }

    onClick(): void {       
        this.ratingClicked.emit(`The rating ${this.rating} is clicked`);
    }
}