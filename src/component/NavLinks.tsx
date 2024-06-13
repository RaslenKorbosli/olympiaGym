import Link from '@/component/Link';
import { SelectedPage } from '@/share/types';
type props = {
  selectedPage: SelectedPage;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};
function NavLinks({ selectedPage, setSelectedPage }: props) {
  const links = ['Home', 'Benefits', 'OurClasses', 'Contact US'];
  return (
    <>
      {links.map((link) => (
        <Link
          key={link}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          page={link}
        />
      ))}
    </>
  );
}

export default NavLinks;
