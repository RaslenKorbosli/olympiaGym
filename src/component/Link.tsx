import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/share/types';
type props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (val: SelectedPage) => void;
};
function Link({ page, selectedPage, setSelectedPage }: props) {
  function handleClick(page: SelectedPage) {
    setSelectedPage(page);
  }
  const lowerCasePage = page.toLowerCase().replace(' ', '') as SelectedPage;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${selectedPage === lowerCasePage ? 'text-primary-500' : ''} transition duration-500 hover:text-primary-300`}
      onClick={() => handleClick(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
