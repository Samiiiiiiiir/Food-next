import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps
  extends PropsWithChildren,
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section className={twMerge('py-6', className)} {...props}>
      {children}
    </section>
  );
};
