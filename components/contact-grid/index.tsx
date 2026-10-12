import type { ReactNode } from 'react';

type ContactLink = {
  label: string;
  text: string;
  href: string;
};

type Props = {
  items: Record<string, ContactLink>;
};

const iconClassName = 'size-10';

const icons: Record<string, ReactNode> = {
  phone: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconClassName}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  email: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconClassName}
      aria-hidden
    >
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconClassName}
      aria-hidden
    >
      <path d="M20.47 2H3.53A1.45 1.45 0 0 0 2.06 3.43V20.57A1.45 1.45 0 0 0 3.53 22H20.47A1.45 1.45 0 0 0 21.94 20.57V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48A1.56 1.56 0 1 1 8.15 6.92 1.57 1.57 0 0 1 6.59 8.48ZM18.91 18.74h-3V13.91c0-1.38-.49-2.32-1.72-2.32A1.87 1.87 0 0 0 12.54 12a2.3 2.3 0 0 0-.15 1v5.71h-3V9.74h3v1.3a3.37 3.37 0 0 1 2.93-1.55c2.14 0 3.61 1.4 3.61 4.4Z" />
    </svg>
  ),
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconClassName}
      aria-hidden
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
};

export function ContactGrid({ items }: Props) {
  return (
    <ul className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-2">
      {Object.entries(items).map(([key, item]) => {
        const external = item.href.startsWith('http');

        return (
          <li key={key} className="flex justify-center">
            <a
              href={item.href}
              aria-label={item.label}
              className="flex flex-col items-center gap-4 text-foreground/40 transition-colors duration-300 hover:text-primary"
              {...(external
                ? { target: '_blank', rel: 'noreferrer noopener' }
                : {})}
            >
              {icons[key]}
              <h2>{item.text}</h2>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
