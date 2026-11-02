import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ContactService } from '../../core/services/contact.service';

import {
  ContactForm,
  ContactInfo,
  SocialLink,
  FAQ,
} from '../../models/contact-form.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private contactService = inject(ContactService);

  loading = false;
  showAlert = false;
  error = '';

  formData: ContactForm = this.emptyForm();
  alertData: ContactForm = this.emptyForm();

  // Empty form
  emptyForm(): ContactForm {
    return {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };
  }

  // Form validation
  validateForm(): boolean {
    const { name, email, phone, subject, message } = this.formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      this.error = 'Please fill in all fields';
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      this.error = 'Please enter a valid email address';
      return false;
    }

    const phoneRegex = /^\d{10,15}$/;

    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      this.error = 'Please enter a valid phone number';
      return false;
    }

    return true;
  }

  // Submit contact form
  handleSubmit(): void {
    this.error = '';

    if (this.loading || !this.validateForm()) {
      return;
    }

    this.loading = true;

    const data: ContactForm = {
      ...this.formData,
      name: this.formData.name.trim(),
      email: this.formData.email.trim(),
      phone: this.formData.phone.trim(),
      subject: this.formData.subject.trim(),
      message: this.formData.message.trim(),
    };

    this.contactService.submitContact(data).subscribe({
      next: (response) => {
        if (response.success) {
          this.alertData = { ...data };
          this.formData = this.emptyForm();
          this.showAlert = true;
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

  // Close success popup
  closeAlert(): void {
    this.showAlert = false;
  }

  // Contact information
  contactInfo: ContactInfo[] = [
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

  // Social links
  socialLinks: SocialLink[] = [
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

  // Frequently asked questions
  faqs: FAQ[] = [
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
