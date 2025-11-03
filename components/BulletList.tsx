interface BulletListProps {
  items: string[];
  title?: string;
}

export default function BulletList({ items, title }: BulletListProps) {
  return (
    <div className=" py-4 md:py-8 md:px-4  border-t border-b border-border h-full ">
      <ul className="space-y-3">
        {title && <h3 className="py-3 md:py-10 md:text-4xl">{title}</h3>}
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="">•</span>
            <span className="">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
