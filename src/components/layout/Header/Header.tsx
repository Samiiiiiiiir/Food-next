import Link from 'next/link';

import CartIcon from '@/assets/icons/cart.svg';

export const Header = () => {
  return (
    <header className="flex items-center gap-12 pt-6">
      <Link href="/" className="text-2xl font-bold text-primary">
        FOOD-NEXT
      </Link>
      <nav className="grow text-gray-500 font-medium">
        <ul className="flex gap-8 text-xl items-center">
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/menu">About</Link>
          </li>
          <li>
            <Link href="/menu">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="ml-auto flex gap-4 items-center">
        <Link
          className="bg-primary text-white rounded-full py-2 px-8 hover:bg-primary/85"
          href="/login"
        >
          Login
        </Link>
        <Link
          className="bg-primary text-white rounded-full py-2 px-8 hover:bg-primary/85"
          href="/login"
        >
          Register
        </Link>
        <Link className="shrink-0 w-8" href="/cart">
          <CartIcon />
        </Link>
      </div>
    </header>
  );
};
