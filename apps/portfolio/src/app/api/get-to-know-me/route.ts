import { NextResponse } from 'next/server';
import { GetToKnowMeDTO } from '@alex/models/dto/get-to-know-me.dto';

export async function GET() {
  const data: GetToKnowMeDTO[] = [
    {
      title: 'Most Memorable Hike',
      description:
        'Trampas Lakes in New Mexico is my favorite hiking spot. This challenging 11.6-mile out-and-back trail features two pristine alpine lakes nestled in the Sangre de Cristo Mountains.',
      linkout:
        'https://www.alltrails.com/trail/us/new-mexico/trampas-lakes-trail',
      photo: 'img/photos/trampas.jpg',
    },
    {
      title: 'Greatest Kayak Trip',
      description: `Brazos River - Graford, TX 
      Kayak: Eddyline Skylark
      Drop in: Hwy 16 Possum Kingdom Stone Arch Bridge
      Take out: Hwy 4 Rochelle's
      Flow: 860 cfs
      Total distance: 22 miles
      Total time: 6.5 hrs`,
      linkout: 'https://youtu.be/XlwrwcDfqIE',
      photo: 'img/photos/kayak.jpg',
    },
    {
      title: 'First Rock Climb',
      description: `Great Expectations - Elk Slabs
      Wichita Mountains, Oklahoma
      Grade: 5.5 YDS
      Type: Trad
      Height: 150ft
      Style: Two-pitch crack climb with fixed anchors`,
      linkout:
        'https://www.mountainproject.com/route/105883943/great-expectations',
      photo: 'img/photos/greatexpectations4.jpg',
    },
    {
      title: 'Favorite Fiction Book',
      description: `Wizard's First Rule 
      by Terry Goodkind`,
      linkout: '',
      photo: 'img/photos/wizards.jpg',
    },
    {
      title: 'Top TV Show',
      description: `Stranger Things`,
      linkout: '',
      photo: 'img/photos/strangerthings2.jpg',
    },
    {
      title: 'Garden Enthusiast',
      description:
        'Maintaining a thriving vegetable garden with heirloom tomatoes, peppers, and herbs. Learning the art of companion planting and organic pest control.',
      photo: 'img/photos/kayak.jpg',
    },
    {
      title: 'Self-Taught Journey',
      description:
        'Started coding with Python scripts to automate daily tasks, which sparked a passion for development. Transitioned to web development through online resources and building projects.',
      photo: 'img/photos/kayak.jpg',
    },
    {
      title: 'AI Engineering',
      description:
        'Actively working with cutting-edge AI tools like GPT Engineer and Cursor to enhance development workflow and explore new possibilities in AI-assisted coding.',
      photo: 'img/photos/kayak.jpg',
    },
    {
      title: 'Bucket List Goals',
      description:
        'Planning to hike the entire Pacific Crest Trail, learn to play the piano, and visit every national park in the United States.',
      photo: 'img/photos/kayak.jpg',
    },
  ];

  const response = NextResponse.json(data);
  response.headers.set(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  response.headers.set('Pragma', 'no-cache');

  return response;
}
