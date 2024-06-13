import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/share/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import Button from '@/component/Button';
import NavLinks from '@/component/NavLinks';
type props = {
  selectedPage: SelectedPage;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};
function NavBar({ selectedPage, setSelectedPage }: props) {
  const flexBetween = 'flex items-center justify-between';

  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    function handleScrolling() {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener('scroll', handleScrolling);
    return () => window.removeEventListener('scroll', handleScrolling);
  }, [setSelectedPage]);

  const navBarOnScroll = !isTopOfPage
    ? 'bg-primary-100 drop-shadow  py-8 '
    : '';

  return (
    <nav>
      <div
        className={`${flexBetween} ${navBarOnScroll} fixed top-0 z-30 py-6 w-full font-medium  transition-all duration-500`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img alt="logo" src={Logo} />
            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full `}>
                <div className={`${flexBetween} gap-8 text-md  `}>
                  <NavLinks
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8 text-md`}>
                  <p>Sign In</p>
                  <Button setSelectedPage={setSelectedPage}>
                    <p>Become a Member</p>
                  </Button>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setMenuToggled((toggle) => !toggle)}
              >
                <Bars3Icon className="h-6 w-6 text-white cursor-pointer" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile devices */}
      {!isAboveMediumScreens && menuToggled && (
        <div className="fixed right-0 bottom-0 z-40 bg-primary-100 h-full w-80 drop-shadow-xl transition">
          <div
            className="flex p-12 justify-end"
            onClick={() => setMenuToggled((toggled) => !toggled)}
          >
            {' '}
            <button>
              <XMarkIcon className="h-6 w-6 text-gray-400 cursor-pointer" />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-xl font-medium justify-center items-center">
            <NavLinks
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
