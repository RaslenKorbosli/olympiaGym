import { SelectedPage, benefitObject } from '@/share/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type props = {
  benefit: benefitObject;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
function Card({ benefit, setSelectedPage }: props) {
  return (
    <motion.div
      variants={childVariant}
      className="flex-1 flex flex-col gap-4  items-center py-12 px-8 border-gray-100 border-2"
    >
      <div className="rounded-full size-16 bg-primary-100 flex justify-center items-center">
        {benefit.icon}
      </div>
      <h2 className="font-bold">{benefit.label}</h2>
      <p className="text-center mt-3">{benefit.description}</p>
      <AnchorLink
        className="text-sm
              font-bold
              text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUS)}
        href={`#${SelectedPage.ContactUS}`}
      >
        <p className="text-base">Learn More</p>
      </AnchorLink>
    </motion.div>
  );
}

export default Card;
