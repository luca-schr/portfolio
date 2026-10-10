import Image from 'next/image';

type Props = {
  items: Record<string, string>;
};

export function ServiceGrid({ items }: Props) {
  return (
    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Object.entries(items).map(([key, title]) => (
        <li key={key} className="relative h-[14rem] overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
          />
          <h3 className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">
            {title}
          </h3>
        </li>
      ))}
    </ul>
  );
}
