import { HeroText } from '@/components/hero-text';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
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
  );
}
