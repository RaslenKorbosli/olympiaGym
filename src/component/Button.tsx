import { SelectedPage } from '@/share/types';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
type props = {
  children: ReactNode;
  setSelectedPage: Dispatch<SetStateAction<SelectedPage>>;
};
function Button({ children, setSelectedPage }: props) {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-3 hover:bg-primary-500 hover:text-white transition text-lg"
      onClick={() => setSelectedPage?.(SelectedPage.ContactUS)}
      href={`#${SelectedPage.ContactUS}`}
    >
      {children}
    </AnchorLink>
  );
}

export default Button;
