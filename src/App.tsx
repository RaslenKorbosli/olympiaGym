import NavBar from '@/ui/NavBar';
import Home from '@/ui/Home';
import { SelectedPage } from '@/share/types';
import { useState } from 'react';
import Benefits from '@/ui/Benefits';
import Classes from '@/ui/Classes';
import ContactUS from '@/ui/ContactUS';
import Footer from './ui/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div>
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Classes setSelectedPage={setSelectedPage} />
      <ContactUS setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
