import { Section, SectionTop } from '@/components';

export const AboutUs = () => {
  return (
    <Section className="text-center grid grid-cols-[1fr_66%_1fr]">
      <div className="col-start-2 col-end-3">
        <SectionTop subtitle="our story" title="About us" />
        <div className="text-xl font-medium text-gray-500">
          <p className=" mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            itaque rerum temporibus doloremque, accusamus quisquam provident
            similique! Vero et architecto nam sit exercitationem? Mollitia
            expedita deserunt ipsam sed perferendis ab corrupti, enim provident.
            Dolorum architecto unde accusantium tenetur fugiat, facilis error ab
            aliquid! Laborum veritatis delectus placeat numquam reiciendis
            temporibus.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quod libero doloribus laudantium. Alias dolorum rerum dicta? Non nam
            error cum eos dicta recusandae reiciendis autem harum. Veritatis,
            quidem impedit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            vero aliquam voluptates assumenda dolorem ullam a velit, officiis
            nihil unde?
          </p>
        </div>
      </div>
    </Section>
  );
};
