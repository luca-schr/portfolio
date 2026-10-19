import Image from 'next/image';

const images: Record<string, string> = {
  'jane-energie': '/images/bg-sample.jpg',
  'jane-saas': '/images/bg-sample.jpg',
  'shin-agency': '/images/bg-sample.jpg',
  'js-lab': '/images/bg-sample.jpg',
  jobseka: '/images/bg-sample.jpg',
};

type Props = {
  items: Record<string, string>;
};

export function ProjectGrid({ items }: Props) {
  return (
    <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Object.entries(items).map(([key, title]) => (
        <li key={key} className="relative h-[14rem] overflow-hidden">
          <Image
            src={images[key] ?? '/placeholder.svg'}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover brightness-50"
          />
          <h3 className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center text-background">
            {title}
          </h3>
        </li>
      ))}
    </ul>
  );
}
