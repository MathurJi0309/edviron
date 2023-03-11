import LeftSide from './LeftSide.js'
import RightSide from './RightSide'
import Main from './Main'

function App() {
  return (
    <div className="app">
      <div className='col-sm-2'>
        <LeftSide/>
      </div>
      <div className='col-sm-6'>
      <Main/>
      </div>
      <div className='col-sm-4'>
      <RightSide/>
      </div>
    </div>
  );
}

export default App;
