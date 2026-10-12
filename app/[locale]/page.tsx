import { Heading } from '@/components/heading';
import { Hero } from '@/components/hero';
import { ServiceGrid } from '@/components/service-grid';
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
          src: '/images/photo-pro.jpg',
          alt: t('hero.name'),
          fit: 'classic',
          width: 3168,
          height: 4752,
        }}
      />
      <section className="mt-space max-w-wide">
        <Heading
          h={2}
          title={t('introduction.title')}
          description={t('introduction.description')}
          textAlign="center"
        />
        <p className="mt-4">{t('introduction.body')}</p>
      </section>
      <section className="mt-space max-w-wide">
        <Heading
          h={2}
          title={t('services.title')}
          description={t('services.description')}
          textAlign="center"
        />
        <ServiceGrid items={t.raw('services.items')} />
      </section>
      <section className="mt-space max-w-wide">
        <Heading
          h={2}
          title={t('work.title')}
          description={t('work.description')}
          textAlign="center"
        />
      </section>
    </>
  );
}
