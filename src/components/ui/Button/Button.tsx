import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps
  extends PropsWithChildren,
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  appearance?: 'primary' | 'alternate';
}

export const Button = ({
  children,
  className,
  appearance = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'rounded-full cursor-pointer text-lg py-3 border-1 font-medium text-nowrap px-8 transition-all duration-200',
        appearance === 'primary'
          ? 'bg-primary text-white border-primary hover:bg-primary/80'
          : 'text-gray-400 border-gray-400 bg-white hover:bg-gray-400 hover:text-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
