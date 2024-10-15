'use client';

import { Card, CardContent, CardHeader } from '../atoms/Card';

export function CoolCards() {
  return (
    <section className="cool-cards flex gap-4 p-4">
      <Card>
        <CardHeader>
          <span className="font-bold">Most difficult hike</span>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Location:</strong>
            <a
              href="https://www.alltrails.com/trail/us/new-mexico/trampas-lakes-trail"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Trampas Lakes, New Mexico
            </a>
          </p>
          <p>
            <strong>Length:</strong> 11.7 miles
          </p>
          <p>
            <strong>Elevation:</strong> 2,526 feet
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>COOL</CardHeader>
        <CardContent>asdf</CardContent>
      </Card>
    </section>
  );
}

export default CoolCards;
