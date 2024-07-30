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
  ];

  return NextResponse.json(employmentData);
}
