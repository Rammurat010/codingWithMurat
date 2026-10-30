import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  SocialLink,
  TeamMember,
  Feature,
  TimelineItem,
} from '../../models/about.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  // Founder Social Links
  founderSocial: SocialLink[] = [
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
  ];

  // Company Values
  values: string[] = [
    '✨ Quality Education',
    '🤝 Student First Approach',
    '💡 Innovation & Creativity',
    '🌱 Continuous Learning',
    '🌍 Inclusivity & Accessibility',
  ];

  // Statistics
  stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '100+', label: 'Students Trained' },
    { number: '20+', label: 'Courses Offered' },
    { number: '50+', label: 'Projects Completed' },
  ];

  // Features
  features: Feature[] = [
    {
      icon: '🎓',
      title: 'Expert Instructors',
      description:
        'Learn from industry professionals with real-world experience in software development.',
    },
    {
      icon: '📚',
      title: 'Comprehensive Courses',
      description:
        'Learn programming and modern web development from beginner to advanced level.',
    },
    {
      icon: '💻',
      title: 'Hands-on Projects',
      description:
        'Build real-world projects that showcase your skills to potential employers.',
    },
    {
      icon: '🏆',
      title: 'Certification',
      description:
        'Earn certificates upon course completion to boost your career.',
    },
    {
      icon: '👥',
      title: 'Community Support',
      description:
        'Join a community of learners, mentors and coding enthusiasts.',
    },
    {
      icon: '🚀',
      title: 'Career Guidance',
      description:
        'Get placement assistance, interview preparation and career guidance.',
    },
  ];

  // Journey Timeline
  timeline: TimelineItem[] = [
    {
      year: '2019',
      title: 'Started Teaching Journey',
      description:
        'Began teaching programming to students in local communities and online platforms.',
    },
    {
      year: '2020',
      title: 'YouTube Channel Launch',
      description:
        'Launched Coding with Murat to reach and educate more students globally.',
    },
    {
      year: '2022',
      title: 'Student Registration Platform',
      description:
        'Developed a student registration platform for easier course management.',
    },
    {
      year: '2024',
      title: 'Full Stack Education Platform',
      description:
        'Expanded into a complete learning platform with multiple courses and resources.',
    },
  ];

  // Team Members
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Rammurat Yadav',
      role: 'Founder & CEO',
      bio: 'Passionate educator and software developer with 5+ years of experience in teaching and web development. Dedicated to making coding accessible to everyone.',
      image: '/Rammurat-Image.jpeg',
      social: [
        {
          name: 'LinkedIn',
          icon: '💼',
          url: 'https://www.linkedin.com/in/rammurat-yadav-418242228',
        },
        {
          name: 'GitHub',
          icon: '🐙',
          url: 'https://github.com/Rammurat010',
        },
        {
          name: 'YouTube',
          icon: '▶️',
          url: 'https://www.youtube.com/@CodingwithMurat',
        },
        {
          name: 'Instagram',
          icon: '📸',
          url: 'https://www.instagram.com/codingwithmurat',
        },
      ],
    },
    {
      id: 2,
      name: 'Coding with Murat Team',
      role: 'Education Team',
      bio: 'A dedicated team of educators and developers committed to providing quality education and helping students achieve their coding dreams.',
      image: '/Rammurat-Image.jpeg',
      social: [
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
      ],
    },
  ];

  // Why Choose Us
  reasons: Feature[] = [
    {
      icon: '👨‍🏫',
      title: 'Expert Faculty',
      description:
        'Learn from experienced educators and developers with practical industry knowledge.',
    },
    {
      icon: '📖',
      title: 'Practical Learning',
      description:
        'Focus on real-world projects and practical applications, not just theory.',
    },
    {
      icon: '💰',
      title: 'Affordable Education',
      description:
        'Quality education at affordable prices with flexible learning options.',
    },
    {
      icon: '🔄',
      title: 'Lifetime Access',
      description:
        'Access learning materials, regular updates and continuous support.',
    },
    {
      icon: '🌍',
      title: 'Community Driven',
      description:
        'Learn and grow with students from different backgrounds and skill levels.',
    },
    {
      icon: '🎯',
      title: 'Personalized Learning',
      description:
        'Get guidance and support according to your learning pace and goals.',
    },
  ];
}
