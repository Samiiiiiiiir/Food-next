import Image from 'next/image';

import { Button, Section } from '@/components';

import ArrowIcon from '@/assets/icons/arrow.svg';
import pizzaImage from '@/assets/pizza.png';

export const Hero = () => {
  return (
    <Section className="grid grid-cols-[40%_1fr] gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 max-lg:gap-6 py-28">
        <h1 className="text-6xl font-bold max-w-[330px] sm:col-start-1 sm:col-end-3">
          Everything is better with a{' '}
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="sm:col-start-1 sm:col-end-3 text-xl text-gray-500">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicios joy in life
        </p>
        <Button className="uppercase flex gap-3 justify-center items-center max-w-[300px] justify-self-center w-full">
          order now
          <ArrowIcon width={30} height={30} className="shrink-0" />
        </Button>
        <Button
          appearance="alternate"
          className="sm:col-start-2 flex gap-3 justify-center items-center max-w-[300px] justify-self-center w-full"
        >
          Learn more
          <ArrowIcon width={30} height={30} className="shrink-0" />
        </Button>
      </div>
      <div className="relative justify-center max-md:hidden">
        <Image
          src={pizzaImage}
          alt=""
          className="absolute w-full h-full object-contain"
        />
      </div>
    </Section>
  );
};
