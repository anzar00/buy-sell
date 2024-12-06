import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListingsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buy-sell';
}
