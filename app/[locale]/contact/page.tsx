import { Heading } from '@/components/heading';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  return (
    <div className="section-y">
      <Heading h={1} title={t('title')} />
    </div>
  );
}
