import AnchorLink from 'react-anchor-link-smooth-scroll';
type props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (val: string) => void;
};
function Link({ page, selectedPage, setSelectedPage }: props) {
  function handleClick(page: string) {
    setSelectedPage(page);
  }
  const lowerCasePage = page.toLowerCase().replace(' ', '');
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
