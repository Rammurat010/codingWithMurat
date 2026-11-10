export interface Admission {
  id?: number;

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;

  fatherName: string;
  motherName: string;
  guardianPhone: string;

  course: string;
  qualification: string;
  percentage: string;
  passingYear: string;

  address: string;
  city: string;
  state: string;
  pincode: string;
}

export interface AdmissionResponse {
  success: boolean;
  message: string;
  data?: Admission | { id: number };
}
