import { NextResponse } from 'next/server';
import { EmploymentExperienceDTO } from '@alex/models/dto/employment-experience.dto';

export async function GET() {
  const employmentData: EmploymentExperienceDTO[] = [
    {
      companyName: 'InRhythm',
      companyUrl: 'https://inrhythm.com',
      position: 'Software Engineer',
      dateStarted: '2025',
      dateEnded: 'present',
      responsibilities: [
        'Consultant @ Fidelity. Building a shared component library central registry site for Fidelity Angular developers.',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'Node',
        'HTML5',
        'SCSS',
        'RXJS',
        'NGRX',
        'Git',
        'Agile',
      ],
    },
    {
      companyName: 'LPL Financial',
      companyUrl: 'https://www.lpl.com',
      position: 'Sr. Software Engineer',
      dateStarted: '2021',
      dateEnded: '2024',
      responsibilities: [
        'Lead Angular developer for Model Hub app. Built core features, did advanced refactoring, and onboarded new developers.',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'Node',
        'HTML5',
        'SCSS',
        'Tailwind',
        'RXJS',
        'NGRX',
        'Jest',
        'DevExtreme',
        'SQL',
        'Git',
        'Agile',
      ],
    },
    {
      companyName: 'Credit Union of Texas',
      companyUrl: 'https://www.cutx.org',
      position: 'Web Developer',
      dateStarted: '2020',
      dateEnded: '2021',
      responsibilities: [
        'Built two high-traffic websites in Banno CMS, and built a new auto loan app that pre-filled data from TransUnion.',
      ],
      technologies: [
        'Node',
        'Gulp',
        'HTML5',
        'CSS3',
        'JavaScript',
        'jQuery',
        'Git',
        'Google Cloud',
        'Sitecore',
        'Salesforce',
        'Banno CMS',
        'VS Code',
      ],
    },
    {
      companyName: 'Zilis',
      companyUrl: 'https://www.zilis.com',
      position: 'Frontend Developer',
      dateStarted: '2020',
      dateEnded: '2020',
      responsibilities: [
        'Core contributor to several Wordpress sites and plugins launched internationally. Added features to Angular enrollment app.',
      ],
      technologies: [
        'Angular',
        'Wordpress',
        'JavaScript/TypeScript',
        'PHP',
        'MySQL',
        'Shopify',
        'AWS',
        'Azure DevOps',
        'DigitalOcean',
        'Ubuntu',
        'Plesk',
      ],
    },
    {
      companyName: 'Self-employed',
      companyUrl: 'https://www.alex-crist.com',
      position: 'Freelance Developer',
      dateStarted: '2018',
      dateEnded: '2020',
      responsibilities: [
        'Provided full-service web agency services to local business owners to expand their online presence and acquire new customers.',
      ],
      technologies: [
        'Wordpress',
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'PHP',
        'MySQL',
        'Adobe Illustrator',
        'Apache',
        'Siteground',
      ],
    },
  ];

  const response = NextResponse.json(employmentData);
  response.headers.set(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  response.headers.set('Pragma', 'no-cache');

  return response;
}
