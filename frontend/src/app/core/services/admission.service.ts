import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Admission, AdmissionResponse } from '../../models/admission.model';

@Injectable({
  providedIn: 'root',
})
export class AdmissionService {
  private apiUrl = 'http://localhost:5000/api/admissions';

  constructor(private http: HttpClient) {}

  // CREATE ADMISSION
  createAdmission(data: Admission): Observable<AdmissionResponse> {
    return this.http.post<AdmissionResponse>(this.apiUrl, data);
  }

  // GET ALL ADMISSIONS
  getAdmissions(): Observable<{
    success: boolean;
    data: Admission[];
  }> {
    return this.http.get<{
      success: boolean;
      data: Admission[];
    }>(this.apiUrl);
  }

  // GET ADMISSION BY ID
  getAdmissionById(id: number): Observable<{
    success: boolean;
    data: Admission;
  }> {
    return this.http.get<{
      success: boolean;
      data: Admission;
    }>(`${this.apiUrl}/${id}`);
  }

  // UPDATE ADMISSION
  updateAdmission(id: number, data: Admission): Observable<AdmissionResponse> {
    return this.http.put<AdmissionResponse>(`${this.apiUrl}/${id}`, data);
  }

  // DELETE ADMISSION
  deleteAdmission(id: number): Observable<AdmissionResponse> {
    return this.http.delete<AdmissionResponse>(`${this.apiUrl}/${id}`);
  }
}
