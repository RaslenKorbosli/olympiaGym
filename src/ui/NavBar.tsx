// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from '@/component/Link';
import { useState } from 'react';
function NavBar() {
  const flexBetween = 'flex items-center justify-between';
  const links = ['Home', 'Benefits', 'OurClasses', 'Contact US'];
  const [selectedPage, setSelectedPage] = useState('home');
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 py-6 w-full `}>
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img alt="logo" src={Logo} />
            {/* right side */}
            <div className={`${flexBetween} w-full `}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                {links.map((link) => (
                  <Link
                    key={link}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page={link}
                  />
                ))}
              </div>
              <div className={`${flexBetween} gap-8 text-md`}>
                <p>Sign In</p>
                <p>Become a Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
