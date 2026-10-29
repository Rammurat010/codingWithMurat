import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-after-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-after-login.component.html',
  styleUrl: './footer-after-login.component.css',
})
export class FooterAfterLoginComponent {
  year = new Date().getFullYear();

  socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@CodingwithMurat',
      icon: '▶️',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Rammurat010',
      icon: '🐙',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rammurat-yadav-418242228',
      icon: '💼',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/codingwithmurat',
      icon: '📸',
    },
  ];

  quickLinks = [
    { name: '🏠 Home', path: '/' },
    { name: 'ℹ️ About', path: '/about' },
    { name: '📚 Courses', path: '/courses' },
    { name: '📝 Admission', path: '/admission' },
    { name: '📞 Contact', path: '/contact' },
  ];

  contactInfo = [
    {
      icon: '📍',
      type: 'address',
      content: 'Gram - Barawa Chamainiya',
      extra: 'PO - Pakdi Bishnupur',
      third: 'Dist - Maharajganj',
      fourth: 'Pin - 273151',
    },
    {
      icon: '📞',
      type: 'phone',
      content: '+91 88005 19736',
      url: 'tel:+918800519736',
    },
    {
      icon: '✉️',
      type: 'email',
      content: 'rammuratyadav224@gmail.com',
      url: 'mailto:rammuratyadav224@gmail.com',
    },
    {
      icon: '🕐',
      type: 'hours',
      content: 'Mon-Fri: 9AM - 6PM',
    },
  ];
}
