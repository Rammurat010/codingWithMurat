import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

import { AuthService } from '../../core/services/auth.service';
import { FooterBeforeLoginComponent } from '../footer-before-login/footer-before-login.component';
import { FooterAfterLoginComponent } from '../footer-after-login/footer-after-login.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterBeforeLoginComponent, FooterAfterLoginComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.updateFooter();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateFooter();
      });
  }

  private updateFooter(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}
