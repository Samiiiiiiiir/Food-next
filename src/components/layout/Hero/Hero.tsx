import Image from 'next/image';
import React from 'react';

import ArrowIcon from '@/assets/icons/arrow.svg';

import pizzaImage from '@/assets/pizza.png';

export const Hero = () => {
  return (
    <section className="grid grid-cols-[40%_1fr] py-6 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 max-lg:gap-6 py-28">
        <h1 className="text-6xl font-bold max-w-[330px] sm:col-start-1 sm:col-end-3">
          Everything is better with a{' '}
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="sm:col-start-1 sm:col-end-3 text-xl text-gray-500">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicios joy in life
        </p>
        <button className="cursor-pointer uppercase py-3.5 bg-primary rounded-full text-white flex gap-3 justify-center text-lg items-center font-medium text-nowrap max-w-[300px] justify-self-center w-full">
          order now
          <ArrowIcon width={30} height={30} className="shrink-0" />
        </button>
        <button className="cursor-pointer sm:col-start-2 py-3 rounded-full text-gray-500 border-1 border-gray-500 flex gap-3 justify-center text-lg items-center font-medium text-nowrap max-w-[300px] justify-self-center w-full">
          Learn more
          <ArrowIcon width={30} height={30} className="shrink-0" />
        </button>
      </div>
      <div className="relative justify-center max-md:hidden">
        <Image src={pizzaImage} alt="" layout="fill" objectFit="contain" />
      </div>
    </section>
  );
};
