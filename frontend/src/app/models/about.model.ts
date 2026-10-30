export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: SocialLink[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}
