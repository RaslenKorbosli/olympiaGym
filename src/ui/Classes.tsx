import HeaderText from '@/component/HeaderText';
import { SelectedPage, imgProps } from '@/share/types';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const imagesData: Array<imgProps> = [
  {
    name: 'Weight Training Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit, vitae repellat rem asperiores.',
    imgUrl: '../../public/image1.png',
  },
  {
    name: 'Fitness Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit, vitae repellat rem asperiores.',
    imgUrl: '../../public/image2.png',
  },
  {
    name: 'Adventure Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit, vitae repellat rem asperiores.',
    imgUrl: '../../public/image3.png',
  },
  {
    name: 'Training Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit, vitae repellat rem asperiores.',
    imgUrl: '../../public/image4.png',
  },
  {
    name: 'Training strength Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit, vitae repellat rem asperiores.',
    imgUrl: '../../public/image5.png',
  },
  {
    name: 'Yoga Training Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit, vitae repellat rem asperiores.',
    imgUrl: '../../public/image6.png',
  },
];
type props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1080 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1080, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Classes({ setSelectedPage }: props) {
  return (
    <section
      id="ourclasses"
      className="mx-auto bg-primary-100 min-h-full py-20 "
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HeaderText label="Our Classes" specialStyles="" />
            <p className="text-lg pb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              laboriosam voluptatem est ullam voluptates possimus deserunt!
            </p>
          </div>
        </motion.div>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          autoPlay={true}
          infinite={true}
          ssr={true}
          itemClass="pr-3"
          dotListClass="bg-none"
          containerClass="w-5/6 mx-auto mt-4"
        >
          {imagesData.map((imgData) => (
            <div className="relative" key={imgData.imgUrl}>
              <div className="absolute size-full top-0 text-xl bg-primary-500 opacity-0 hover:opacity-100 hover:bg-opacity-80  flex justify-center items-center flex-col text-center gap-6 px-6 text-white transition">
                <h1 className=" text-2xl">{imgData.name}</h1>
                <p>{imgData.description}</p>
              </div>
              <img
                className=""
                src={imgData.imgUrl}
                alt={`${imgData.description} image`}
              />
            </div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
}

export default Classes;
