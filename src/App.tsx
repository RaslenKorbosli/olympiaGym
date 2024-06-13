import NavBar from '@/ui/NavBar';
import Home from './ui/Home';
import { SelectedPage } from './share/types';
import { useState } from 'react';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className=" bg-gray-20">
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <div>ffjgh</div>
    </div>
  );
}

export default App;
