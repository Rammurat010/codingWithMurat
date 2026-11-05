import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Course {
  id: number;
  title: string;
  category: string;
  level: string;
  duration: string;
  price: string;
  students: number;
  rating: number;
  image: string;
  icon: string;
  description: string;
  topics: string[];
  instructor: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  selectedCategory = 'all';
  searchTerm = '';

  showEnrollModal = false;
  selectedCourse: Course | null = null;

  courses: Course[] = [
    {
      id: 1,
      title: 'React.js Mastery',
      category: 'frontend',
      level: 'Intermediate',
      duration: '8 Weeks',
      price: '₹499',
      students: 45,
      rating: 4.8,
      image: '/course-react.jpg',
      icon: '⚛️',
      description:
        'Master React.js from basics to advanced with real-world projects. Learn hooks, context API, and state management.',
      topics: [
        'React Hooks',
        'Context API',
        'Redux',
        'Routing',
        'API Integration',
      ],
      instructor: 'Rammurat Yadav',
    },
    {
      id: 2,
      title: 'Python Programming',
      category: 'backend',
      level: 'Beginner',
      duration: '6 Weeks',
      price: '₹399',
      students: 38,
      rating: 4.7,
      image: '/course-python.jpg',
      icon: '🐍',
      description:
        'Learn Python from scratch. Build real-world applications and understand core programming concepts.',
      topics: [
        'Python Basics',
        'OOP',
        'Data Structures',
        'File Handling',
        'Web Scraping',
      ],
      instructor: 'Rammurat Yadav',
    },
    {
      id: 3,
      title: 'JavaScript Complete',
      category: 'frontend',
      level: 'Beginner',
      duration: '10 Weeks',
      price: '₹449',
      students: 52,
      rating: 4.9,
      image: '/course-js.jpg',
      icon: '📜',
      description:
        'Complete JavaScript course covering ES6+, DOM manipulation, and modern JavaScript features.',
      topics: ['ES6+', 'DOM', 'Async/Await', 'Promises', 'OOP'],
      instructor: 'Rammurat Yadav',
    },
    {
      id: 4,
      title: 'HTML & CSS Mastery',
      category: 'frontend',
      level: 'Beginner',
      duration: '4 Weeks',
      price: '₹299',
      students: 60,
      rating: 4.6,
      image: '/course-html-css.jpg',
      icon: '🌐',
      description:
        'Build beautiful responsive websites with HTML5 and CSS3. Learn flexbox, grid, and animations.',
      topics: [
        'HTML5',
        'CSS3',
        'Flexbox',
        'Grid',
        'Animations',
        'Responsive Design',
      ],
      instructor: 'Rammurat Yadav',
    },
    {
      id: 5,
      title: 'Node.js Backend',
      category: 'backend',
      level: 'Intermediate',
      duration: '8 Weeks',
      price: '₹549',
      students: 30,
      rating: 4.8,
      image: '/course-node.jpg',
      icon: '🚀',
      description:
        'Build scalable backend applications with Node.js, Express, and MongoDB.',
      topics: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication'],
      instructor: 'Rammurat Yadav',
    },
    {
      id: 6,
      title: 'Full Stack Development',
      category: 'fullstack',
      level: 'Advanced',
      duration: '16 Weeks',
      price: '₹999',
      students: 25,
      rating: 4.9,
      image: '/course-fullstack.jpg',
      icon: '💎',
      description:
        'Complete full-stack development with React, Node.js, and MongoDB. Build production-ready applications.',
      topics: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'CI/CD'],
      instructor: 'Rammurat Yadav',
    },
    {
      id: 7,
      title: 'Data Science with Python',
      category: 'data',
      level: 'Intermediate',
      duration: '12 Weeks',
      price: '₹699',
      students: 20,
      rating: 4.7,
      image: '/course-data.jpg',
      icon: '📊',
      description:
        'Master data science with Python. Learn pandas, numpy, matplotlib, and machine learning.',
      topics: [
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Machine Learning',
        'Data Visualization',
      ],
      instructor: 'Rammurat Yadav',
    },
    {
      id: 8,
      title: 'Web Development Bootcamp',
      category: 'fullstack',
      level: 'Beginner',
      duration: '20 Weeks',
      price: '₹1,499',
      students: 35,
      rating: 4.8,
      image: '/course-bootcamp.jpg',
      icon: '🎯',
      description:
        'Intensive bootcamp covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
      topics: [
        'HTML/CSS',
        'JavaScript',
        'React',
        'Node.js',
        'MongoDB',
        'Deployment',
      ],
      instructor: 'Rammurat Yadav',
    },
    {
      id: 9,
      title: 'SQL & Database Management',
      category: 'data',
      level: 'Beginner',
      duration: '6 Weeks',
      price: '₹349',
      students: 28,
      rating: 4.5,
      image: '/course-sql.jpg',
      icon: '🗄️',
      description:
        'Master SQL and database management. Learn MySQL, PostgreSQL, and database design.',
      topics: ['SQL', 'MySQL', 'PostgreSQL', 'Database Design', 'Optimization'],
      instructor: 'Rammurat Yadav',
    },
  ];

  categories = [
    { id: 'all', label: 'All Courses', icon: '📚' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'fullstack', label: 'Full Stack', icon: '💎' },
    { id: 'data', label: 'Data Science', icon: '📊' },
  ];

  // Filter Courses
  get filteredCourses(): Course[] {
    return this.courses.filter((course) => {
      const matchesCategory =
        this.selectedCategory === 'all' ||
        course.category === this.selectedCategory;

      const matchesSearch =
        course.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.description
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }

  // Total Students
  get totalStudents(): number {
    return this.courses.reduce((total, course) => total + course.students, 0);
  }

  // Total Instructors
  get totalInstructors(): number {
    return new Set(this.courses.map((course) => course.instructor)).size;
  }

  // Render Stars
  getStars(rating: number): string {
    return '⭐'.repeat(Math.round(rating));
  }

  // Open Enrollment Modal
  handleEnroll(course: Course): void {
    this.selectedCourse = course;
    this.showEnrollModal = true;
  }

  // Close Modal
  closeModal(): void {
    this.showEnrollModal = false;
    this.selectedCourse = null;
  }

  // Enroll Button
  confirmEnroll(): void {
    if (!this.selectedCourse) return;

    alert(`Enrollment requested for ${this.selectedCourse.title}`);

    this.closeModal();
  }
}
