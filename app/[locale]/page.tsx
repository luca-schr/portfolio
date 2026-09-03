import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <section className="layout-prose section-y">
      <h1 className="type-display">{t('hero.name')}</h1>
      <p className="type-heading mt-stack text-primary">{t('hero.profile')}</p>
      <p className="mt-stack">{t('hero.description')}</p>
    </section>
  );
}
