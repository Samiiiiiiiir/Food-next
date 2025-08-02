import { Section, SectionTop } from '@/components';

export const ContactUs = () => {
  return (
    <Section className="text-center">
      <SectionTop subtitle="don't hesitate" title="Contact us" />
      <div className="my-12">
        <a
          className="text-4xl text-gray-600 font-bold hover:underline"
          href="tel:+380931234567"
        >
          +38(093)1234567
        </a>
      </div>
    </Section>
  );
};
