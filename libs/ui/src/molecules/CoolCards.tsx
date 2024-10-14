'use client';

import { Card, CardContent, CardHeader } from '../atoms/Card';

export function CoolCards() {
  return (
    <section className="cool-cards flex gap-4 p-4">
      <Card>
        <CardHeader>NEAT</CardHeader>
        <CardContent>asdf</CardContent>
      </Card>
      <Card>
        <CardHeader>COOL</CardHeader>
        <CardContent>asdf</CardContent>
      </Card>
    </section>
  );
}

export default CoolCards;
