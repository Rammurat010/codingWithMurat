import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Admission } from '../../models/admission.model';
import { AdmissionService } from '../../core/services/admission.service';

@Component({
  selector: 'app-admission',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.css',
})
export class AdmissionComponent {
  loading = false;
  successMessage = '';
  errorMessage = '';

  courses: string[] = [
    'BCA',
    'MCA',
    'B.Tech',
    'M.Tech',
    'BBA',
    'MBA',
    'B.Sc',
    'M.Sc',
  ];

  admission: Admission = this.getEmptyAdmission();

  constructor(private admissionService: AdmissionService) {}

  getEmptyAdmission(): Admission {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
      fatherName: '',
      motherName: '',
      guardianPhone: '',
      course: '',
      qualification: '',
      percentage: '',
      passingYear: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
    };
  }

  submitAdmission(): void {
    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.admissionService.createAdmission(this.admission).subscribe({
      next: (response) => {
        this.loading = false;
        this.successMessage = response.message;
        this.admission = this.getEmptyAdmission();
      },

      error: (error) => {
        this.loading = false;

        this.errorMessage = error.error?.message || 'Admission submit failed!';
      },
    });
  }

  resetForm(): void {
    this.admission = this.getEmptyAdmission();
    this.successMessage = '';
    this.errorMessage = '';
  }
}
