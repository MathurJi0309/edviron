import LeftSide from './LeftSide.js'
import RightSide from './RightSide'
import Main from './Main'

function App() {
  return (
    <div className="row App">
      <div className='col-md-2'>
        <LeftSide/>
      </div>
      <div className='col-md-6'>
      <Main/>
      </div>
      <div className='col-md-4'>
      <RightSide/>
      </div>
    </div>
  );
}

export default App;
