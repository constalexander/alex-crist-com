import { Button } from '@alex/ui/atoms/button';

export default function Page() {
  return (
    <div>
      <h1 className="text-[10vw] text-slate-400 ml-[10px] mt-[-20px]">
        Alex Crist
      </h1>
      <Button variant="outline" className="mt-5">
        Send it
      </Button>
    </div>
  );
}
