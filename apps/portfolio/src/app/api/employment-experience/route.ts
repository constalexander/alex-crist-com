import { NextResponse } from 'next/server';
import { EmploymentExperienceDTO } from '@alex/models/lib/dto/employment-experience.dto';

export async function GET() {
  const employmentData: EmploymentExperienceDTO[] = [
    {
      companyName: 'LPL Financial',
      companyUrl: 'https://www.lpl.com',
      position: 'Sr. Software Engineer',
      dateStarted: 'Nov 2021',
      dateEnded: 'present',
      responsibilities: [
        'Built an Angular app called Model Hub, part of the Clientworks platform.',
      ],
      technologies: ['Angular', 'RxJS', 'NgRx', 'Jest', 'Cypress'],
    },
    {
      companyName: 'Credit Union of Texas',
      companyUrl: 'https://www.cutx.org',
      position: 'Web Developer',
      dateStarted: 'Nov 2020',
      dateEnded: 'Sept 2021',
      responsibilities: ['responsibility'],
      technologies: ['tech'],
    },
    {
      companyName: 'Zilis',
      companyUrl: 'https://www.zilis.com',
      position: 'Frontend Developer',
      dateStarted: 'April 2020',
      dateEnded: 'Nov 2020',
      responsibilities: [],
      technologies: [],
    },
    {
      companyName: 'Self-employed',
      companyUrl: 'https://www.alex-crist.com',
      position: 'Freelance Fullstack Developer',
      dateStarted: 'Jan 2018',
      dateEnded: 'April 2020',
      responsibilities: [],
      technologies: [],
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
