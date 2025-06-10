// Types for a college class
export interface CollegeClass {
  code: string; // e.g., 'COMP SCI 300'
  name: string; // e.g., 'Programming II'
  description: string;
  credits: number;
  averageGPA?: number; // optional, from Madgrades
  prerequisites?: string[];
}

// Example data for Computer Engineering major (can be extended)
export const classes: CollegeClass[] = [
  {
    code: 'COMP SCI 300',
    name: 'Programming II',
    description: 'Continuation of programming fundamentals, data structures, and algorithms.',
    credits: 3,
    averageGPA: 3.2,
    prerequisites: ['COMP SCI 200'],
  },
  {
    code: 'COMP ENG 352',
    name: 'Digital System Fundamentals',
    description: 'Introduction to digital logic, circuits, and systems.',
    credits: 3,
    averageGPA: 3.1,
    prerequisites: ['MATH 222'],
  },
  {
    code: 'E C E 230',
    name: 'Circuit Analysis',
    description: 'Basic circuit analysis techniques and applications.',
    credits: 4,
    averageGPA: 2.9,
    prerequisites: ['MATH 222'],
  },
  {
    code: 'E C E 551',
    name: 'DIGITAL SYSTEM DESIGN AND SYNTHESIS',
    description: 'Introduction to the use of hardware description languages and automated synthesis in design.',
    credits: 3,
    averageGPA: 2.9,
    prerequisites: ['E C E 352'],
  },
];
