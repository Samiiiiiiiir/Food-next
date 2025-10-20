import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface FieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Field = ({ className, ...props }: FieldProps) => {
  return (
    <input
      className={twMerge(
        'block bg-gray-100 rounded-lg py-1 px-4 border border-gray-300',
        className
      )}
      {...props}
    />
  );
};
