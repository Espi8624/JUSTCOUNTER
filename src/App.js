
import { useEffect, useState } from 'react';

import './App.css';

function CountSpace(props) {
  const [gauge, setGauge] = useState("");

  let gauge_plus = "";
  let gauge_changer = () => {
    let cipher_number = String(props.value).length;
    let cipher = String(props.value)[cipher_number - 1];

    if (cipher === "0" && props.value !== 0) {
      gauge_plus = "■■■■■■■■■■";
    } else {
      for (let i = 0; i < Number(cipher); i++) {

        gauge_plus += "■";
      }
    }
  }

  useEffect(() => {
    setGauge(gauge_plus);
  });


  return (
    <div onChange={gauge_changer()}>
      <ul className='gauge-wrap'>
        {gauge}
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
          <div className='button-click' onClick={click_counter}>CLICK!</div>
          <div className='button-click' onClick={click_reset}>RESET</div>
        </div>
      </div>
    </div>
  );
}

export default App;
