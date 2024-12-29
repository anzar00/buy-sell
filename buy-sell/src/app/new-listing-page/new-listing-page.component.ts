import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listing-page',
  imports: [CommonModule, FormsModule, ListingDataFormComponent],
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})

export class NewListingPageComponent implements OnInit  {
  
  constructor(
    private router: Router,
    private listingsService: ListingsService
  ) { }

  ngOnInit(): void {
      
  }

  onSubmit({name, description, price}: {name: string, description: string, price: number}) : void {
    this.listingsService.createListing(name, description, price).subscribe(() => {
      this.router.navigateByUrl('/my-listings');
    });
  }
}
