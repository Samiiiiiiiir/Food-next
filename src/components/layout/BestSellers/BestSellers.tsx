import { SectionTop, MenuItem, Section } from '@/components';

export const BestSellers = () => {
  return (
    <Section>
      <SectionTop subtitle="check out" title="Our Best Sellers" />
      <ul className="grid grid-cols-3 gap-6">
        {new Array(6).fill(null).map((_, i) => (
          <li key={i}>
            <MenuItem />
          </li>
        ))}
      </ul>
    </Section>
  );
};
