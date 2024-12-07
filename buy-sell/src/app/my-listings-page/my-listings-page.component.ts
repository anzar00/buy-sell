import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';
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

  ngOnInit() : void {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(listingId: string) : void {
    alert(`Deleting listing ${listingId}`);
  }

}
