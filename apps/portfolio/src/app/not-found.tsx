'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@alex/ui/atoms/Button';

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl text-stone-400 tracking-wide">404 NOT FOUND</h1>
      <h2 className="text-lg text-stone-500 tracking-wide mt-4 mb-2">
        The trail led to nowhere 😕
      </h2>
      <Button
        variant="outline"
        className="mt-5"
        onClick={(e) => {
          e.preventDefault();
          router.push('/');
        }}
      >
        Return to basecamp
      </Button>
    </div>
  );
}
