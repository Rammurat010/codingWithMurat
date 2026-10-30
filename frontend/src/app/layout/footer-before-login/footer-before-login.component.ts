import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-before-login',
  standalone: true,
  imports: [],
  templateUrl: './footer-before-login.component.html',
  styleUrl: './footer-before-login.component.css',
})
export class FooterBeforeLoginComponent {
  year = new Date().getFullYear();
}
