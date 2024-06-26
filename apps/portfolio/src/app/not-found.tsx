import { Button } from '@alex/ui/atoms/button';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl text-zinc-700 ml-[10px] tracking-wide">
        404 NOT FOUND
      </h1>
      <Button variant="outline" className="mt-5">
        Go Home
      </Button>
    </div>
  );
}
