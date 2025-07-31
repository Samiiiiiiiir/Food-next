import Link from 'next/link';
import React from 'react';

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

          <li className="ml-auto bg-primary text-white rounded-full py-2 px-8">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <button className="text-2xl">logout</button>
      <Link href="/cart">Cart</Link>
    </header>
  );
};
