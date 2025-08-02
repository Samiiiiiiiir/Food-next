import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionTopProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  subtitle: string;
  title: string;
}

export const SectionTop = ({
  subtitle,
  title,
  className,
  ...props
}: SectionTopProps) => {
  return (
    <div className={twMerge('text-center mb-8', className)} {...props}>
      <span className="uppercase text-xl font-bold text-gray-600">
        {subtitle}
      </span>
      <h2 className="text-primary text-[40px] leading-11 font-bold">{title}</h2>
    </div>
  );
};
