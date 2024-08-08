'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@alex/ui/atoms/Button';

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl text-stone-400 ml-[10px] tracking-wide">
        404 NOT FOUND
      </h1>
      <Button
        variant="outline"
        className="mt-5"
        onClick={(e) => {
          e.preventDefault();
          router.push('/');
        }}
      >
        Go Home
      </Button>
    </div>
  );
}
