import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-listing-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})

export class NewListingPageComponent implements OnInit  {
  
  name : string = '';
  description : string = '';  
  price : number = 0; 

  constructor(private router: Router) { }

  ngOnInit(): void {
      
  }

  onSubmit() : void {
    alert('Creating a new listing');
    this.router.navigateByUrl('/my-listings');
  }
}
