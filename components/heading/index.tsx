import type { ReactNode } from 'react';
import { clsx } from 'clsx';

const tags = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const;

const titleClass = {
  1: 'type-display',
  2: 'type-title',
  3: 'type-heading',
  4: 'type-subheading',
  5: 'type-body',
  6: 'type-caption',
} as const;

const descriptionClass = {
  1: 'type-subheading text-primary',
  2: 'type-subheading text-primary',
  3: 'type-body text-primary',
  4: 'type-body',
  5: 'type-caption',
  6: 'type-caption',
} as const;

export type HeadingLevel = keyof typeof tags;

export type HeadingProps = {
  h: HeadingLevel;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function Heading({ h, title, description, className }: HeadingProps) {
  const Tag = tags[h];

  const heading = <Tag className={clsx(titleClass[h], className)}>{title}</Tag>;

  if (description == null || description === false) {
    return heading;
  }

  return (
    <div className="flex flex-col gap-[0.35em]">
      {heading}
      <p className={descriptionClass[h]}>{description}</p>
    </div>
  );
}
