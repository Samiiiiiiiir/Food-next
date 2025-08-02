import { Button } from '@/components';
import Image from 'next/image';
import pizzaImage from '@/assets/pizza.png';

export const MenuItem = () => {
  return (
    <div className="bg-gray-100 rounded-xl text-center p-8 grid gap-3 hover:bg-gray-50 transition-all duration-200 shadow-md">
      <Image
        src={pizzaImage}
        className="justify-self-center mb-2"
        alt="image"
        width={250}
      />
      <h3 className="font-bold text-2xl">Test title</h3>
      <p className="text-gray-500 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        delectus. Ducimus magni odit quibusdam mollitia molestiae! Velit,
        tempore?.
      </p>
      <Button>Add to cart $12</Button>
    </div>
  );
};
