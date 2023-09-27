
import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  let click_counter = () => {
    let count_plus = count + 1;
    setCount(count_plus);
  }

  let click_reset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="container">
        <div className='container-box'>
          <div>
            {count}
          </div>
          <p>
            PUSH THE BUTTON
          </p>
          <div className='Button-Click' onClick={click_counter}>CLICK!</div>
          <div className='Button-Click' onClick={click_reset}>RESET</div>
        </div>
      </div>
    </div>
  );
}

export default App;
