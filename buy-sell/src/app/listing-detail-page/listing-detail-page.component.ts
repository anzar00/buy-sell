import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing-detail-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.css'
})

export class ListingDetailPageComponent implements OnInit {

  isLoading: boolean = true;
  listing!: Listing;
  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    console.log(`Fetching listing with id: ${id}`);
    this.listingsService.getListingById(id!).subscribe(listing => {
      this.listing = listing;
      this.isLoading = false;
    });

    this.listingsService.addViewToListing(id!).subscribe(
      () => console.log('View added')
    );
  }

}
