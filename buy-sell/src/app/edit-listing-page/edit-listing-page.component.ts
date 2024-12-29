import { Component, OnInit } from '@angular/core';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-listing-page',
  imports: [ListingDataFormComponent, FormsModule, CommonModule],
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent implements OnInit  {

  listing !: Listing ;

  constructor(
    private router: Router, 
    private route : ActivatedRoute,
    private listingsService: ListingsService
  ) { }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.listingsService.getListingById(id!).subscribe(listing => {
        this.listing = listing;
      });
  }

  onFormSubmitted({name, description, price}: {name: string, description: string, price: number}): void {
    this.listingsService.updateListing(this.listing.id, name, description, price).subscribe(() => {
      this.router.navigateByUrl('/my-listings');
    });
  }
}
