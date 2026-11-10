import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Admission } from '../../models/admission.model';

@Component({
  selector: 'app-admission',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.css',
})
export class AdmissionComponent {
  admission: Admission = this.getEmptyAdmission();

  courses = ['BCA', 'MCA', 'B.Tech', 'M.Tech', 'BBA', 'MBA', 'B.Sc', 'M.Sc'];

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
    console.log('Admission Details:', this.admission);
    alert('Admission submitted successfully!');
  }

  resetForm(): void {
    this.admission = this.getEmptyAdmission();
  }
}
