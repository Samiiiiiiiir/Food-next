import { Button, Field, Section } from '@/components';
import Image from 'next/image';

import googleImage from '@/assets/google.webp';
import Link from 'next/link';

export default function Register() {
  return (
    <Section className="pt-14">
      <div className="grid gap-3 max-w-md text-center mx-auto">
        <form className="grid gap-3">
          <h1 className="text-5xl text-primary mb-4 font-semibold">Register</h1>
          <Field
            className="py-2"
            placeholder="Email"
            type="email"
            name="email"
          />
          <Field
            className="py-2"
            placeholder="Password"
            type="password"
            name="password"
          />
          <Button className="rounded-xl py-2">Register</Button>
        </form>
        <span className="text-lg text-gray-600">or login with provider</span>
        <Button
          appearance="alternate"
          className="rounded-xl text-black py-2 flex justify-center gap-3 hover:bg-gray-50 hover:text-black"
        >
          <Image src={googleImage} alt="" width={30} />
          Login with google
        </Button>
        <div className="text-lg text-gray-600">
          Existing account?{' '}
          <Link
            href="/login"
            className="underline hover:text-black transition-all duration-200"
          >
            Login here &#187;
          </Link>
        </div>
      </div>
    </Section>
  );
}
