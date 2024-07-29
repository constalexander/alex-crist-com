import { NextResponse } from 'next/server';

export async function GET() {
  const employmentData = [
    {
      companyName: 'Company A',
      dateStarted: '2020-01-01',
      dateEnded: '2021-01-01',
      position: 'Software Engineer'
    },
    {
      companyName: 'Company B',
      dateStarted: '2019-01-01',
      dateEnded: '2020-01-01',
      position: 'Junior Developer'
    }
  ];

  return NextResponse.json(employmentData);
}

