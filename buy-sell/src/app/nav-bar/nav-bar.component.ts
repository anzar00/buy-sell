import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.getUser();
  }

  ngOnInit(): void {}

  signOut() {
    this.authService.signOut().subscribe({
      next: () => console.log('User signed out'),
      error: (err) => console.error('Error signing out', err)
    });
  }
}