import { HeroText } from '@/components/hero-text';
import { useTranslations } from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('BlogPage');

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
