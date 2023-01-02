import Cardlist from './components/Cardlist'
import SearchBox from './components/SearchBox';
import { RobotProvider } from './context/RobotContext';

function App() {
  return (
    <>
      <RobotProvider>
          <div  className='tc'>
            <h1 className="f2 white pTitle">RoboFriends</h1>
            <SearchBox />
          </div>
          <Cardlist />
      </RobotProvider>
    </>
  );
}

export default App;
