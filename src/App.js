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

          <div style=
            {
              { 
                overflow: 'scroll', 
                border: '5px solid transparent', 
                marginTop: '25px', 
                height: '800px'
              }
            }>
            <Cardlist />
          </div>
      </RobotProvider>
    </>
  );
}

export default App;
