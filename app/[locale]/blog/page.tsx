import {useTranslations} from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('BlogPage');
  return <h1 className="type-display">{t('title')}</h1>;
}
