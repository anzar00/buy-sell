import { Component, OnInit } from '@angular/core';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  imports: [ListingDataFormComponent, FormsModule],
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent implements OnInit  {

  listing !: Listing ;

  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.listing = fakeMyListings.find(listing => listing.id === id) || { id: '', name: '', description: '', price: 0 };
  }

  onFormSubmitted(): void {
    alert('Saving listing changes');
    console.log('Form submitted with data:');
    this.router.navigateByUrl('/my-listings');
  }
}
