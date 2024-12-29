import { Routes } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'listings', component: ListingsPageComponent },
  { path: 'listings/:id', component: ListingDetailPageComponent },
  { path: 'contact/:id', component: ContactPageComponent },
  { path: 'edit-listing/:id', component: EditListingPageComponent },
  { path: 'my-listings', component: MyListingsPageComponent },
  { path: 'new-listing', component: NewListingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/listings', pathMatch: 'full' }
];

export const appProviders = [
  provideHttpClient()
];