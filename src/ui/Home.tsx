import Button from '@/component/Button';
import useMediaQuery from '@/hooks/useMediaQuery';
import homePageText from '@/assets/HomePageText.png';
import homePageGraphic from '@/assets/HomePageGraphic.png';
import { SelectedPage } from '@/share/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
type props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function Home({ setSelectedPage }: props) {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const changeStyleAboveMediumScreens = !isAboveMediumScreens
    ? 'flex-col py-36'
    : 'h-screen ';
  return (
    <section id="home" className=" flex items-center z-40 bg-gray-20   ">
      {/* image an main header */}
      <motion.div
        className={`${changeStyleAboveMediumScreens} z-0 flex gap-16 items-center justify-center w-5/6 m-auto`}
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* main header */}{' '}
        <div className="flex-1 ">
          {/* heading */}
          <motion.div
            className="space-y-10 pb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:-z-10 md:before:content-evolvetext">
                <img alt="home page text" src={homePageText} />
              </div>
            </div>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit Quisquam
              voluptates dolore. <br /> modi dicta numquam laudantium modi dicta
              numquam laudantium. Magni fugiat assumenda molestiae dolore.
            </p>
          </motion.div>
          {/* actions */}
          <motion.div
            className="flex gap-8 items-center justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Button setSelectedPage={setSelectedPage}>Join Now</Button>
            <AnchorLink
              className="text-sm
              font-bold
              text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUS)}
              href={`#${SelectedPage.ContactUS}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* image */}{' '}
        <div className="flex-1">
          <img alt="home page graphic" src={homePageGraphic} />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
