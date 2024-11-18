import { NextResponse } from 'next/server';
import { CoolFactsDTO } from '@alex/models/dto/cool-facts.dto';

export async function GET() {
  const coolFactsData: CoolFactsDTO[] = [
    {
      title: 'Best Hike',
      description: 'Trampas Lakes in New Mexico is my favorite hiking spot. This challenging 11.6-mile out-and-back trail features two pristine alpine lakes nestled in the Sangre de Cristo Mountains.',
      linkout: 'https://www.alltrails.com/trail/us/new-mexico/trampas-lakes-trail',
    },
    {
      title: 'Favorite Kayak Trip',
      description: 'Explored the bioluminescent waters of Tomales Bay, California. The experience of paddling through water that glows with every stroke was absolutely magical.',
    },
    {
      title: 'Garden Enthusiast',
      description: 'Maintaining a thriving vegetable garden with heirloom tomatoes, peppers, and herbs. Learning the art of companion planting and organic pest control.',
    },
    {
      title: 'Self-Taught Journey',
      description: 'Started coding with Python scripts to automate daily tasks, which sparked a passion for development. Transitioned to web development through online resources and building projects.',
    },
    {
      title: 'AI Engineering',
      description: 'Actively working with cutting-edge AI tools like GPT Engineer and Cursor to enhance development workflow and explore new possibilities in AI-assisted coding.',
    },
    {
      title: 'Bucket List Goals',
      description: 'Planning to hike the entire Pacific Crest Trail, learn to play the piano, and visit every national park in the United States.',
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