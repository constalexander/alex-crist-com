import { NextResponse } from 'next/server';
import { CoolFactsDTO } from '@alex/models/dto/cool-facts.dto';

export async function GET() {
  const coolFactsData: CoolFactsDTO[] = [
    {
      title: 'Best Hike',
      description: 'Trampas Lakes',
      linkout:
        'https://www.alltrails.com/trail/us/new-mexico/trampas-lakes-trail',
    },
    {
      title: 'Favorite Kayak Trip',
      description: 'More details here',
    },
    {
      title: 'Garden',
      description: 'More details here',
    },
    {
      title: 'Self-Taught',
      description: 'More details here',
    },
    {
      title: 'GPT Engineer, OpenHands, Cursor',
      description: 'More details here',
    },
    {
      title: 'Bucket list items',
      description: 'Ring Dinger',
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
