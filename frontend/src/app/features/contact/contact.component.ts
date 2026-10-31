import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

import { ContactForm } from '../../models/contact-form.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  loading = false;
  showAlert = false;
  error = '';

  formData: ContactForm = this.emptyForm();
  alertData: ContactForm = this.emptyForm();

  private apiUrl = 'http://localhost:5000/api/contact/submit';

  constructor(private http: HttpClient) {}

  emptyForm(): ContactForm {
    return {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };
  }

  handleSubmit(): void {
    this.error = '';

    const { name, email, phone, subject, message } = this.formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      this.error = 'Please fill in all fields';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      this.error = 'Please enter a valid email address';
      return;
    }

    const phoneRegex = /^\d{10,}$/;

    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      this.error = 'Please enter a valid phone number';
      return;
    }

    this.loading = true;

    this.http.post<any>(this.apiUrl, this.formData).subscribe({
      next: (response) => {
        if (response.success) {
          this.alertData = { ...this.formData };
          this.formData = this.emptyForm();

          this.showAlert = true;

          setTimeout(() => {
            this.closeAlert();
          }, 8000);
        } else {
          this.error = response.message || 'Failed to send message';
        }

        this.loading = false;
      },

      error: (err) => {
        console.error('Contact API Error:', err);

        this.error = err.error?.message || 'Network error. Please try again.';

        this.loading = false;
      },
    });
  }

  closeAlert(): void {
    this.showAlert = false;
  }

  contactInfo = [
    {
      icon: '📍',
      title: 'Our Address',
      details: [
        'Gram - Barawa Chamainiya',
        'PO - Pakdi Bishnupur',
        'Dist - Maharajganj',
        'Pin - 273151',
      ],
    },
    {
      icon: '📞',
      title: 'Phone Number',
      details: ['+91 88005 19736', '+91 12345 67890'],
    },
    {
      icon: '✉️',
      title: 'Email Address',
      details: ['rammuratyadav224@gmail.com', 'info@codingwithmurat.com'],
    },
    {
      icon: '🕐',
      title: 'Working Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 2:00 PM',
        'Sunday: Closed',
      ],
    },
  ];

  socialLinks = [
    {
      name: 'YouTube',
      icon: '▶️',
      url: 'https://www.youtube.com/@CodingwithMurat',
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/Rammurat010',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/rammurat-yadav-418242228',
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://www.instagram.com/codingwithmurat',
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/codingwithmurat',
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/918800519736',
    },
  ];

  faqs = [
    {
      question: 'How do I register for a course?',
      answer: 'Click the Register button and follow the registration process.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards, UPI and Net Banking.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 7-day money-back guarantee.',
    },
    {
      question: 'How long do I have access to courses?',
      answer: 'You get lifetime access to purchased courses with free updates.',
    },
  ];
}
