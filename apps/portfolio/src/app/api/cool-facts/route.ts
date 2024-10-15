import { NextResponse } from 'next/server';
import { CoolFactsDTO } from '@alex/models/lib/dto/cool-facts.dto';

export async function GET() {
  const coolFactsData: CoolFactsDTO[] = [
    {
      title: 'Longest Hike',
      description: 'Trampas Lakes',
      linkout:
        'https://www.alltrails.com/trail/us/new-mexico/trampas-lakes-trail',
    },
    {
      title: 'Interesting Thing',
      description: 'More details here',
    },
  ];

  const response = NextResponse.json(coolFactsData);
  response.headers.set(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  response.headers.set('Pragma', 'no-cache');

  return response;
}
