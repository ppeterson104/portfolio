import { cn } from '@/lib/utils';

export default function GrainEffect() {
  return (
    <div
      className={cn(
        'fixed top-0, left-0 w-full h-full',
        'before:-top-40 before:-left-40 before:w-[calc(100%+20rem)] before:h-[calc(100%+20rem)]',
        'before:fixed before:bg-[url(/assets/images/noisy-background.png)] before:opacity-15 pointer-events-none before:animate-noise'
      )}
    ></div>
  );
}
