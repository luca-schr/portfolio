import { Heading } from '@/components/heading';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  return <Heading h={1} title={t('title')} />;
}
