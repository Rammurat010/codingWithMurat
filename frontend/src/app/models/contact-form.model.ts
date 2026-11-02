export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  contactId?: number;
}

export interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
