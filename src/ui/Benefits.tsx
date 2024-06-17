import HeaderText from '@/component/HeaderText';
import { SelectedPage, benefitObject } from '@/share/types';
import { motion } from 'framer-motion';
import benefitImg from '@/assets/BenefitsPageGraphic.png';
import {
  UserGroupIcon,
  HomeModernIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import Card from '@/component/Card';
import Button from '@/component/Button';

type props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};
const benefitsData: Array<benefitObject> = [
  {
    id: 1,
    icon: <HomeModernIcon className="h-6 w-6" />,
    label: 'State Of Facilities',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: 2,
    icon: <UserGroupIcon className="h-6 w-6" />,
    label: " 100's Of Diverse Classes",
    description:
      'Quasi harum reprehenderit autem ratione ipsum fugiat perferendis quo ullam odio',
  },
  {
    id: 3,
    icon: <AcademicCapIcon className="h-6 w-6" />,
    label: ' Experts And Pro Trainers',
    description:
      'Quasi harum reprehenderit autem ratione ipsum fugiat perferendis quo ullam odio',
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
function Benefits({ setSelectedPage }: props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" md:my-5 md:w-3/5"
        >
          <HeaderText label="More Than Just Gym" specialStyles="" />
          <p className="my-5 text-lg ">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            fugiat nam itaque corrupti enim doloribus, iusto eligendi voluptate
            fuga Quam provident tempore aliquid excepturi expedita! Officiis,
            illum ea perspiciatis fugit magnam quibusdam recusandae cum minus
            id.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-8 flex-col md:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefitsData.map((benefit) => (
            <Card
              key={benefit.id}
              benefit={benefit}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
      <div className="flex flex-col md:flex-row  gap-12 justify-center items-center my-8 ">
        <img className=" z-10" src={benefitImg} alt="benefit image" />
        <div className="flex-1 flex flex-col items-start">
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:content-abstractwaves z-[-1]"></div>
            <HeaderText
              label="MILLIONS OF HAPPY MEMBERS GETTING FIT"
              specialStyles=""
            />
          </div>

          <p className="text-lg my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            corrupti qui aperiam vitae quo asperiores quidem possimus suscipit
            nobis at nulla sequi dignissimos quod beatae, ratione, eius porro
            distinctio sint.
          </p>
          <p className="text-lg mb-5">
            ipsum dolor sit amet consectetur adipisicing elit. Possimus
            exercitationem, accusantium delectus, qui voluptatibus assumenda
            eveniet rerum veritatis placeat vero optio aspernatur nulla omnis
            voluptate! Laudantium maxime incidunt voluptas unde?
          </p>
          <div className="relative mt-5">
            <div className="before:absolute before:left-48 before:content-sparkles z-[-1]"></div>
            <Button setSelectedPage={setSelectedPage}> Join Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
