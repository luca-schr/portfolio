'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/app/i18n/navigation';
import { navLinks } from '@/components/header/links';

const laptopQuery = '(min-width: 48rem)';

export function Header() {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const previousPathname = useRef(pathname);
  const hoverLocked = useRef(false);

  useEffect(() => {
    if (previousPathname.current === pathname) {
      return;
    }

    previousPathname.current = pathname;
    setOpen(false);
    hoverLocked.current = true;
    const active = document.activeElement;
    if (active instanceof HTMLElement) {
      active.blur();
    }
  }, [pathname]);

  function isLaptop() {
    return window.matchMedia(laptopQuery).matches;
  }

  function openMenu() {
    if (hoverLocked.current) {
      return;
    }
    setOpen(true);
  }

  function closeMenu() {
    hoverLocked.current = false;
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        aria-label={t('close')}
        tabIndex={open ? 0 : -1}
        className={clsx(
          'fixed inset-0 z-[15] cursor-pointer bg-foreground/20 transition-opacity duration-300 ease-out',
          open
            ? 'opacity-100 delay-0'
            : 'pointer-events-none opacity-0 delay-300'
        )}
        onClick={() => {
          hoverLocked.current = true;
          setOpen(false);
        }}
      />
      <div
        onMouseEnter={() => {
          if (isLaptop()) {
            openMenu();
          }
        }}
        onMouseLeave={() => {
          if (isLaptop()) {
            closeMenu();
          }
        }}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? t('close') : t('menu')}
          onClick={() => {
            hoverLocked.current = false;
            setOpen((current) => !current);
          }}
          className={clsx(
            'fixed top-5 left-2 z-[25] cursor-pointer p-0 text-foreground transition-opacity duration-300 ease-out md:left-5',
            open ? 'opacity-100' : 'opacity-50'
          )}
        >
          <svg
            viewBox="0 0 24 24"
            className={clsx('size-6', open && 'max-md:hidden')}
            fill="none"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            viewBox="0 0 24 24"
            className={clsx('size-6', open ? 'md:hidden' : 'hidden')}
            fill="none"
          >
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <header
          id="site-menu"
          className={clsx(
            'fixed top-0 z-20 flex h-dvh w-full flex-col bg-background duration-300 ease-out md:w-[12.5rem] md:pb-5',
            'transition-[left]',
            open ? 'left-0 delay-300' : 'left-[-100%] delay-0'
          )}
        >
          <Image
            src="/logo-pro.svg"
            alt={t('logo')}
            width={100}
            height={100}
            className="absolute top-5 left-1/2 h-auto w-16 -translate-x-1/2 md:static md:order-last md:mt-auto md:ml-5 md:translate-x-0"
          />
          <nav
            className="flex min-h-0 w-full flex-1 flex-col items-center justify-center md:items-stretch"
            aria-label={t('menu')}
          >
            <ul className="flex w-full flex-col">
              {navLinks.map((item) => {
                const current = pathname === item.href;

                return (
                  <li key={item.labelKey} className="w-full">
                    <Link
                      href={item.href}
                      aria-current={current ? 'page' : undefined}
                      onClick={(event) => {
                        hoverLocked.current = true;
                        setOpen(false);
                        event.currentTarget.blur();
                      }}
                      className={clsx(
                        'flex w-full cursor-pointer items-center justify-center px-2 py-1 type-body whitespace-nowrap text-foreground hover:text-link-hover md:justify-start md:px-5',
                        current && 'text-link-hover'
                      )}
                    >
                      {t(item.labelKey)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
