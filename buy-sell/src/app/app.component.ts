import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, CommonModule, RouterModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buy-sell';
  user : any = null;
 
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
