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
        'rounded-full cursor-pointer text-lg py-3 border-2 font-medium text-nowrap px-8 transition-all duration-200',
        appearance === 'primary'
          ? 'bg-primary text-white  border-primary hover:bg-transparent hover:text-primary'
          : 'text-gray-500 border-gray-500 bg-white hover:bg-gray-500 hover:text-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
