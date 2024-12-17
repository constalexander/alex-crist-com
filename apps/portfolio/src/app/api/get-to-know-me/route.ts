import { NextResponse } from 'next/server';
import { GetToKnowMeDTO } from '@alex/models/dto/get-to-know-me.dto';

export async function GET() {
  const data: GetToKnowMeDTO[] = [
    {
      title: 'Most Legendary Hike',
      description: `Trampas Lakes Trail
        Sangre de Cristo Mountains
        Carson National Forest, NM
        Length: 11.7 miles out & back
        Elevation Gain: 2,526 ft
        Difficulty: Hard
        Followed a rushing stream up
        to two pristine alpine lakes.
        `,
      linkout:
        'https://www.alltrails.com/trail/us/new-mexico/trampas-lakes-trail',
      photo: 'img/photos/trampas.jpg',
    },
    {
      title: 'Coolest Kayak Trip',
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
      title: 'DIY Gardener',
      description:
        'Cultivating the art of growing vegetables, herbs, flowers, and other plants. Teaching myself organic gardening, soil composition and companion planting as I expand my botanical kingdom through the seasons and years.',
      photo: 'img/photos/garden.jpg',
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
  ];

  const response = NextResponse.json(data);
  response.headers.set(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  response.headers.set('Pragma', 'no-cache');

  return response;
}
