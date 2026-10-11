import Image from 'next/image';
import { Heading, type HeadingProps } from '@/components/heading';

type Props = {
  heading: HeadingProps;
  image: {
    src: string;
    alt: string;
  };
};

export function HeroText({ heading, image }: Props) {
  return (
    <section className="relative h-dvh w-full">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        preload={heading.h === 1}
        loading={heading.h === 1 ? 'eager' : 'lazy'}
        className="object-cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <Heading {...heading} />
      </div>
    </section>
  );
}
