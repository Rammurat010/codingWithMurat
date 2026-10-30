import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';
import { User } from '../../models/auth.model';
import { AlertComponent, AlertType } from '../../shared/alert/alert.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AlertComponent],
  template: `
    <main class="card">
      <h2>Dashboard</h2>

      <app-alert [message]="message" [type]="alertType" />

      @if (loading) {
        <p>Loading profile...</p>
      } @else if (user) {
        <h3>Welcome, {{ user.name }}!</h3>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>User ID:</strong> {{ user.id }}</p>

        <button (click)="logout()">Logout</button>
      }
    </main>
  `,
  styles: [
    `
      .card {
        max-width: 500px;
        margin: 40px auto;
        padding: 24px;
        font-family: Arial, sans-serif;
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0 4px 16px #00000010;
      }

      button {
        padding: 11px 20px;
        margin-top: 12px;
        color: white;
        background: #b91c1c;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
      }
    `,
  ],
})
export class DashboardComponent implements OnInit {
  private auth = inject(AuthService);
  private router = inject(Router);

  user: User | null = null;
  loading = true;
  message = '';
  alertType: AlertType = 'info';

  ngOnInit(): void {
    this.auth.getProfile().subscribe({
      next: (response) => {
        this.user = response.user;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.auth.logout();
        this.alertType = 'error';
        this.message = error.error?.message || 'Session expired. Please login.';
        this.router.navigate(['/login']);
      },
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
