import type { ReactNode } from 'react';
import { clsx } from 'clsx';

const tags = {
  1: 'h1',
  2: 'h2',
} as const;

const titleClass = {
  1: 'type-display',
  2: 'type-title',
} as const;

const descriptionClass = {
  1: 'type-subheading text-primary',
  2: 'type-subheading text-primary',
} as const;

export type HeadingLevel = keyof typeof tags;
export type HeadingAlign = 'left' | 'center' | 'right';

const alignClass = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const;

export type HeadingProps = {
  h: HeadingLevel;
  title: ReactNode;
  description?: ReactNode;
  textAlign?: HeadingAlign;
  className?: string;
};

export function Heading({
  h,
  title,
  description,
  textAlign = 'left',
  className,
}: HeadingProps) {
  const Tag = tags[h];

  const heading = (
    <Tag className={clsx(titleClass[h], alignClass[textAlign], className)}>
      {title}
    </Tag>
  );

  if (description == null || description === false) {
    return heading;
  }

  return (
    <div className={clsx('flex flex-col gap-[0.35em]', alignClass[textAlign])}>
      {heading}
      <p className={descriptionClass[h]}>{description}</p>
    </div>
  );
}
