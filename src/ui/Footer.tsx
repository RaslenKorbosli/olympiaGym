import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/16/solid';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { contactProps } from '@/share/types';
import ContactLink from '@/component/ContactLink';
const contactData: Array<contactProps> = [
  {
    id: 1,
    contactText: 'Our Address',
    contactIcon: <MapPinIcon className="size-8" />,
    contactLink:
      'https://www.google.com/maps/place/Olympia+Gym+Kelibia/@36.8457483,11.0963011,17.39z/data=!4m10!1m2!2m1!1solympia+gym!3m6!1s0x131d33c6a8f8af09:0xc9cff050a02b4937!8m2!3d36.845952!4d11.1000495!15sCgtvbHltcGlhIGd5bZIBA2d5beABAA!16s%2Fg%2F11byys3gw4?entry=ttu',
    contactDescription: 'Rue Taher Haded, Kélibia',
  },
  {
    id: 2,
    contactText: 'Call Us',
    contactIcon: <PhoneIcon className="size-8" />,
    contactLink: 'tel:22931506',
    contactDescription: '22931506',
  },
  {
    id: 3,
    contactText: 'Email',
    contactIcon: <EnvelopeIcon className="size-8" />,
    contactLink: 'mailto:olympia.gym@gmail.com',
    contactDescription: 'olympia.gym@gmail.com',
  },
];
function Footer() {
  return (
    <div className=" bg-primary-100 pb-20   ">
      <iframe
        className="w-full h-[250px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.8546791164545!2d11.097474576381453!3d36.84595626511829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d33c6a8f8af09%3A0xc9cff050a02b4937!2sOlympia%20Gym%20Kelibia!5e0!3m2!1sen!2stn!4v1718635547865!5m2!1sen!2stn"
        width="600"
        height="450"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="flex flex-col md:flex-row items-center justify-center w-5/6 mt-5 mx-auto">
        {contactData.map((contact) => (
          <div className="w-full max-w-[350px] py-8 pl-8 ">
            <ContactLink
              key={contact.id}
              contactText={contact.contactText}
              contactIcon={contact.contactIcon}
              contactLink={contact.contactLink}
              contactDescription={contact.contactDescription}
            />
          </div>
        ))}
        <div className="p-8 flex gap-6">
          <a href="">
            <FaFacebook className="size-8" />
          </a>
          <a href="">
            <FaInstagram className="size-8" />
          </a>
        </div>
      </div>
      <p className="w-2/3 text-lg mx-auto mt-5">
        © 2024 all copyright reserved to Raslen Korbosli
      </p>
    </div>
  );
}

export default Footer;
