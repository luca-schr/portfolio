import { Hero } from '@/components/hero';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <>
      <Hero
        heading={{
          h: 1,
          title: t('hero.name'),
          description: t('hero.profile'),
        }}
        buttons={[
          { label: t('hero.cta'), href: '/contact' },
          { label: t('hero.ctaSecondary'), href: '/about', variant: 'secondary' },
        ]}
        image={{
          src: '/photo-pro.jpg',
          alt: t('hero.name'),
          fit: 'classic',
          width: 3168,
          height: 4752,
        }}
      />
      <p className="mt-space max-w-prose">{t('hero.description')}</p>
    </>
  );
}
