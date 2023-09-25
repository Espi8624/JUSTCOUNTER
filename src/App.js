
import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  let click_counter = () => {
    let count_plus = count + 1;
    setCount(count_plus);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {count}
        </div>
        <p>
          PUSH THE BUTTON
        </p>
        <div className='Button-Click' onClick={click_counter}>CLICK!</div>
      </header>
    </div>
  );
}

export default App;
