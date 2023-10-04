
import { useState } from 'react';

import './App.css';

function CountSpace(props) {

  let cipher_number = String(props.value).length;
  let cipher = Number(String(props.value)[cipher_number - 1]);

  return (
    <div>
      <ul className='gauge-wrap'>
        <li className={'gauge-box' + ((cipher > 0 || (cipher === 0 && props.value !== 0)) ? " on" : "")}></li>
        <li className={'gauge-box' + ((cipher > 1 || (cipher === 0 && props.value !== 0)) ? " on" : "")}></li>
        <li className={'gauge-box' + ((cipher > 2 || (cipher === 0 && props.value !== 0)) ? " on" : "")}></li>
        <li className={'gauge-box' + ((cipher > 3 || (cipher === 0 && props.value !== 0)) ? " on" : "")}></li>
        <li className={'gauge-box' + ((cipher > 4 || (cipher === 0 && props.value !== 0)) ? " on" : "")}></li>
        <li className={'gauge-box' + ((cipher > 5 || (cipher === 0 && props.value !== 0)) ? " on" : "")}></li>
        <li className={'gauge-box' + ((cipher > 6 || (cipher === 0 && props.value !== 0)) ? " on" : "")}></li>
        <li className={'gauge-box' + ((cipher > 7 || (cipher === 0 && props.value !== 0)) ? " on" : "")}></li>
        <li className={'gauge-box' + ((cipher > 8 || (cipher === 0 && props.value !== 0)) ? " on" : "")}></li>
        <li className={'gauge-box' + ((cipher === 0 && props.value !== 0) ? " on" : "")}></li>
      </ul>
      {props.value}
    </div>
  );
}

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
          <CountSpace value={count}></CountSpace>
          <p>
            PUSH THE BUTTON
          </p>
          <div className='button' onClick={click_counter}>CLICK!</div>
          <div className='button reset' onClick={click_reset}>RESET</div>
        </div>
      </div>
    </div>
  );
}

export default App;
