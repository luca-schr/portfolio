import type { ComponentProps, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Link } from '@/app/i18n/navigation';

const variants = {
  primary:
    'bg-primary text-primary-foreground hover:brightness-110 active:brightness-95',
  secondary:
    'border border-border bg-background text-foreground hover:bg-muted',
  ghost: 'text-foreground hover:bg-muted',
} as const;

const baseClassName =
  'inline-flex items-center justify-center px-4 py-2 type-body rounded-md font-medium transition-[filter,background-color] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

export type ButtonVariant = keyof typeof variants;

type ButtonShared = {
  label: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = ButtonShared &
  Omit<ComponentProps<'button'>, keyof ButtonShared | 'href' | 'children'> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonShared &
  Omit<ComponentProps<typeof Link>, keyof ButtonShared | 'children'> & {
    href: ComponentProps<typeof Link>['href'];
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  label,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(baseClassName, variants[variant], className);

  if (props.href !== undefined) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {label}
      </Link>
    );
  }

  const { type = 'button', ...buttonProps } = props;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {label}
    </button>
  );
}
