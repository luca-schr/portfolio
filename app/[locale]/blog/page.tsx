import {useTranslations} from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('BlogPage');
  return <h1>{t('title')}</h1>;
}
