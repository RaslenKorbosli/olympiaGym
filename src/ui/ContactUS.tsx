import HeaderText from '@/component/HeaderText';
import { SelectedPage } from '@/share/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
type props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};
function ContactUS({ setSelectedPage }: props) {
  const inputStyle =
    'w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white';
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const isValid = await trigger();
    if (!isValid) e.preventDefault();
  }

  return (
    <section id="contactus" className="mx-auto py-20 bg-gray-20  ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        className="flex flex-col justify-center items-center mx-auto w-5/6 gap-12"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <HeaderText
              label="Join Now To Get In Shape"
              specialStyles="text-center"
            />
            <p className="text-lg my-4 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              officia nemo, delectus reiciendis nihil rem assumenda non ducimus,
              sequi explicabo ipsa ut saepe? Maiores, reprehenderit itaque
              asperiores veritatis animi dolorum?
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-4/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            action="https://formsubmit.co/raslen.korbosli01@gmail.com"
            target="_blank"
            onSubmit={onSubmit}
            method="POST"
            className=" flex flex-col gap-3"
          >
            <input
              className={inputStyle}
              type="text"
              placeholder="name field"
              {...register('name', {
                required: true,
                maxLength: 20,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === 'required' &&
                  'the name field is required'}
                {errors.name.type === 'maxLength' &&
                  'the name field maxLength is 20'}
              </p>
            )}
            <input
              className={inputStyle}
              type="text"
              placeholder="email field"
              {...register('email', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === 'required' &&
                  'the email field is required'}
                {errors.name.type === 'maxLength' &&
                  'the email field maxLength is 20'}
              </p>
            )}
            <textarea
              className={inputStyle}
              placeholder="message field"
              rows={4}
              {...register('message', {
                required: true,
                maxLength: 200,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === 'required' &&
                  'the message field is required'}
                {errors.name.type === 'maxLength' &&
                  'the message field maxLength is 200'}
              </p>
            )}
          </form>
          <button
            type="submit"
            className="rounded-md bg-secondary-500 px-10 py-3 hover:bg-primary-500 hover:text-white transition text-lg mt-5 w-full"
          >
            Submit
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactUS;
