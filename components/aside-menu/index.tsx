'use client';

import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/app/i18n/navigation';
import { routing } from '@/app/i18n/routing';

const labelClassName =
  'max-w-0 overflow-hidden whitespace-nowrap type-body opacity-0 transition-[max-width,opacity] duration-300';

function blurTarget(target: EventTarget | null) {
  if (target instanceof HTMLElement) {
    target.blur();
  }
  const active = document.activeElement;
  if (active instanceof HTMLElement) {
    active.blur();
  }
}

export function AsideMenu() {
  const t = useTranslations('AsideMenu');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [dark, setDark] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const nextLocale = routing.locales.find((item) => item !== locale) ?? routing.locales[0];

  function dismiss(target: EventTarget | null) {
    setExpanded(false);
    setDismissed(true);
    blurTarget(target);
  }

  function toggleTheme(event: React.MouseEvent<HTMLButtonElement>) {
    const nextDark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', nextDark);
    setDark(nextDark);
    dismiss(event.currentTarget);
  }

  function toggleLocale(event: React.MouseEvent<HTMLButtonElement>) {
    dismiss(event.currentTarget);
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <aside
      className={clsx(
        'fixed top-2 right-2 z-10 flex w-max flex-col gap-1 py-3 pl-3 pr-2 transition-[padding] duration-300 ease-out md:right-5',
        expanded && 'pr-3'
      )}
      onMouseEnter={() => {
        if (!dismissed) {
          setExpanded(true);
        }
      }}
      onMouseLeave={() => {
        setDismissed(false);
        setExpanded(false);
      }}
    >
      <span
        aria-hidden
        className={clsx(
          'pointer-events-none absolute inset-0 transition-colors duration-300 ease-out',
          expanded ? 'bg-background' : 'bg-transparent'
        )}
      />
      <div
        className={clsx(
          'relative flex flex-col gap-1 transition-opacity duration-300 ease-out',
          expanded ? 'opacity-100' : 'opacity-50'
        )}
      >
      <button
        type="button"
        onClick={toggleTheme}
        className={clsx(
          'flex cursor-pointer items-center gap-0 text-left text-foreground hover:text-link-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          expanded && 'gap-1'
        )}
        aria-pressed={dark}
        aria-label={t('theme')}
      >
        <span className="grid size-6 shrink-0 place-items-center" aria-hidden>
          {dark ? (
            <svg viewBox="0 0 24 24" className="size-6" fill="none">
              <path
                d="M12 4v1.5M12 18.5V20M4 12h1.5M18.5 12H20M6.2 6.2l1.1 1.1M16.7 16.7l1.1 1.1M6.2 17.8l1.1-1.1M16.7 7.3l1.1-1.1"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="size-6" fill="none">
              <path
                d="M15.5 13.5A6 6 0 0 1 10.5 5 6.5 6.5 0 1 0 19 14.5a6 6 0 0 1-3.5-1Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <span
          className={clsx(
            labelClassName,
            expanded && 'max-w-[12.5rem] opacity-100'
          )}
        >
          {t('theme')}
        </span>
      </button>
      <button
        type="button"
        onClick={toggleLocale}
        className={clsx(
          'flex cursor-pointer items-center gap-0 text-left text-foreground hover:text-link-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          expanded && 'gap-1'
        )}
        aria-label={t('language')}
      >
        <span
          className="grid size-6 shrink-0 place-items-center type-caption font-semibold uppercase"
          aria-hidden
        >
          {locale}
        </span>
        <span
          className={clsx(
            labelClassName,
            expanded && 'max-w-[12.5rem] opacity-100'
          )}
        >
          {t('language')}
        </span>
      </button>
      </div>
    </aside>
  );
}
