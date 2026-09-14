import type { ComponentProps } from 'react';
import { Link } from '@/app/i18n/navigation';

export const navLinks = [
  { href: '/', labelKey: 'home' },
  { href: '/about', labelKey: 'about' },
  { href: '/blog', labelKey: 'blog' },
  { href: '/contact', labelKey: 'contact' },
] as const satisfies ReadonlyArray<{
  href: ComponentProps<typeof Link>['href'];
  labelKey: 'home' | 'about' | 'blog' | 'contact';
}>;
