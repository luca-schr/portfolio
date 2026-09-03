import {useTranslations} from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  return <h1 className="type-display">{t('title')}</h1>;
}
