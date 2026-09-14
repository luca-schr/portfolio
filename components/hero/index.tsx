import Image from 'next/image';
import type { ComponentProps } from 'react';
import { clsx } from 'clsx';
import { Button, type ButtonProps } from '@/components/button';
import { Heading, type HeadingProps } from '@/components/heading';

const gapClass = {
  stack: 'gap-stack',
  'stack-lg': 'gap-stack-lg',
} as const;

const imageFitClass = {
  classic: 'h-auto max-h-dvh w-full max-w-md object-contain',
  cover: 'object-cover',
} as const;

export type HeroGap = keyof typeof gapClass;
export type HeroImageFit = keyof typeof imageFitClass;

type HeroImage = Pick<
  ComponentProps<typeof Image>,
  'src' | 'alt' | 'width' | 'height' | 'className'
> & {
  fit?: HeroImageFit;
};

export type HeroProps = {
  heading: HeadingProps;
  buttons?: ButtonProps[];
  image: HeroImage;
  gap?: HeroGap;
  fullHeight?: boolean;
  className?: string;
};

export function Hero({
  heading,
  buttons,
  image,
  gap = 'stack',
  fullHeight = true,
  className,
}: HeroProps) {
  const {
    alt,
    width = 480,
    height = 480,
    className: imageClassName,
    fit = 'classic',
    ...imageProps
  } = image;

  const picture =
    fit === 'cover' ? (
      <div className="relative aspect-[2/3] w-full max-w-md overflow-hidden">
        <Image
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 28rem"
          preload
          className={clsx(imageFitClass.cover, imageClassName)}
          {...imageProps}
        />
      </div>
    ) : (
      <Image
        alt={alt}
        width={width}
        height={height}
        preload
        className={clsx(imageFitClass.classic, imageClassName)}
        {...imageProps}
      />
    );

  return (
    <section
      className={clsx(
        'grid grid-cols-1 items-center md:grid-cols-2',
        fullHeight && 'min-h-dvh',
        gapClass[gap],
        className
      )}
    >
      <div className="flex flex-col gap-stack">
        <Heading {...heading} />
        {buttons && buttons.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {buttons.map((button, index) => (
              <Button key={index} {...button} />
            ))}
          </div>
        ) : null}
      </div>
      <div className="w-full justify-self-center md:justify-self-end md:w-auto">
        {picture}
      </div>
    </section>
  );
}
