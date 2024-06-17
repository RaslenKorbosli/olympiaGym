import { contactProps } from '@/share/types';

function ContactLink({
  contactText,
  contactIcon,
  contactLink,
  contactDescription,
}: contactProps) {
  return (
    <div className="flex w-full items-center justify-between  border-r-2 border-gray-500 border-opacity-40">
      <div className="flex gap-6">
        <div className="size-12 rounded-full bg-primary-300 flex justify-center items-center">
          {contactIcon}
        </div>
        <div>
          <h2 className="text-xl font-semibold"> {contactText}</h2>
          <a href={contactLink} target="_blank">
            {contactDescription}
          </a>
        </div>
      </div>
      <hr className="border-1 border-black "></hr>
    </div>
  );
}

export default ContactLink;
