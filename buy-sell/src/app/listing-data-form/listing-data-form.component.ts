import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.css'
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText : string = '';
  @Input() currentName : string = '';
  @Input() currentDescription : string = '';
  @Input() currentPrice : number = 0;

  name : string = '';
  description : string = '';  
  price : number = 0; 

  @Output() formSubmitted = new EventEmitter<{ name: string, description: string, price: number }>();

  constructor(private router: Router) { }

  ngOnInit(): void {
      this.name = this.currentName;
      this.description = this.currentDescription;
      this.price = this.currentPrice;
  }

  onButtonClicked() : void {
    this.formSubmitted.emit({
      name: this.name,
      description: this.description,
      price: this.price,
    });
  }
}
