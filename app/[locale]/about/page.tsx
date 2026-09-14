import { Heading } from '@/components/heading';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  return <Heading h={1} title={t('title')} />;
}
