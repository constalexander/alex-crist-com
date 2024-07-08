'use client';

export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-stone-900 text-stone-400 p-2">{children}</div>;
}
