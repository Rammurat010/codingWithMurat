import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import {
  AuthResponse,
  LoginRequest,
  ProfileResponse,
  RegisterRequest,
} from '../../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:5000/api/auth';
  private readonly tokenKey = 'token';

  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, data);
  }

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, data).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token);
        }
      }),
    );
  }

  getProfile(): Observable<ProfileResponse> {
    const token = localStorage.getItem(this.tokenKey);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token ?? ''}`,
    });

    return this.http.get<ProfileResponse>(`${this.apiUrl}/me`, { headers });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
