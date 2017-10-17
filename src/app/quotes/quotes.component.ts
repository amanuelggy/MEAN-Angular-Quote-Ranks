import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
@Input() quotes;
  constructor() { }  
  ngOnInit() {    
  }
  clearQ(){    
    this.quotes = [];   
  }

}
