import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listing-detail-page',
  imports: [RouterModule],
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.css'
})

export class ListingDetailPageComponent implements OnInit {

  listing!: Listing;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id) || {} as Listing;

    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
    });
  }

}
