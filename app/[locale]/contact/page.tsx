import { ContactGrid } from '@/components/contact-grid';
import { Heading } from '@/components/heading';
import { HeroText } from '@/components/hero-text';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <>
      <HeroText
        heading={{
          h: 1,
          title: t('title'),
        }}
        image={{
          src: '/images/bg-sample.jpg',
          alt: t('title'),
        }}
      />
      <section className="mt-space max-w-wide">
        <Heading
          h={2}
          title={t('heading.title')}
          description={t('heading.description')}
          textAlign="center"
        />
        <ContactGrid items={t.raw('links')} />
      </section>
    </>
  );
}
