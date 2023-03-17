import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Header from '../layouts/Header';
import Body from '../layouts/Body';
import Sidebar from '../layouts/Sidebar';

const App = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-[#1c1c1e]">
        <Header setShowSidebar={setShowSidebar} />
        <Body />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
    </Provider>
  );
};

export default App;
