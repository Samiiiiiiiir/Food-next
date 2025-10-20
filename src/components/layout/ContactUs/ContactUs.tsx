import { Section, SectionTop } from '@/components';

export const ContactUs = () => {
  return (
    <Section className="text-center">
      <SectionTop subtitle="don't hesitate" title="Contact us" />
      <div className="my-10">
        <a
          className="text-4xl text-gray-600 font-bold hover:underline"
          href="tel:+380931234567"
        >
          +38 (093) 123 45 67
        </a>
      </div>
    </Section>
  );
};
