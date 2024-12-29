import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-listings-page',
  imports: [RouterModule, CommonModule],
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css'
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) { }

  ngOnInit() : void {
    this.listingsService.getListingsForUser().subscribe(listings => {
      this.listings = listings;
    });
  }

  onDeleteClicked(listingId: string) : void {
    this.listingsService.deleteListing(listingId).subscribe(() => {
      this.listings = this.listings.filter(listing => listing.id !== listingId);
    });
  }

}
