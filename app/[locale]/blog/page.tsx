import { Heading } from '@/components/heading';
import { useTranslations } from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('BlogPage');
  return (
    <div className="section-y">
      <Heading h={1} title={t('title')} />
    </div>
  );
}
