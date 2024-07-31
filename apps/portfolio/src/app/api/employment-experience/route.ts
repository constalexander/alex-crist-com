import { NextResponse } from 'next/server';
import { EmploymentExperienceDTO } from '@alex/models/lib/dto/employment-experience.dto';

export async function GET() {
  const employmentData: EmploymentExperienceDTO[] = [
    {
      companyName: 'LPL Financial',
      position: 'Sr. Software Engineer',
      dateStarted: 'Nov 2021',
      dateEnded: 'present',
    },
    {
      companyName: 'Credit Union of Texas',
      position: 'Web Developer',
      dateStarted: 'Nov 2020',
      dateEnded: 'Sept 2021',
    },
    {
      companyName: 'Zilis',
      position: 'Frontend Developer',
      dateStarted: 'April 2020',
      dateEnded: 'Nov 2020',
    },
    {
      companyName: 'Self-employed',
      position: 'Freelance Fullstack Developer',
      dateStarted: 'Jan 2018',
      dateEnded: 'April 2020',
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
