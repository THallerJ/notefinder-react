import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Header from '../layouts/Header';
import Body from '../layouts/Body';

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-[#1c1c1e]">
        <Header />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
