import { useState } from "react";
import "./App.css";

function App() {
  let timer: any = null;
  const [timeInSecs, setTimeInSecs] = useState<number>(5);
  const [progressInPercentage, setProgressInPercentage] = useState<number>(0);

  const startProgress = () => {
    const interval = 100 / timeInSecs / 1000;
    let counter = 0;

    timer = setInterval(() => {
      if (counter <= 100) {
        counter = counter + interval;
        setProgressInPercentage(counter);
      } else {
        counter = 0;
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="wrapper">
          {/* heading */}
          <div className="headingWrapper">
            <span></span>
            <span className="headingText">Custom Progress Bar</span>
            <span></span>
          </div>
          {/* input for getting time in seconds */}
          <div className="timeInputWrapper">
            <input
              className="timeInput"
              type="number"
              value={timeInSecs}
              onChange={(e) => {
                if (!/^(\s*|\d+)$/.test(e.target.value)) {
                  return;
                } else {
                  setTimeInSecs(parseInt(e.target.value));
                }
              }}
            />
            <button className="startBtn" onClick={startProgress}>
              start
            </button>
          </div>
          <div className="customProgress">
            <span
              className="progress"
              style={{
                width: `${Math.floor(progressInPercentage)}%`,
              }}
            ></span>
            <span className="progressIndicator">
              {`${Math.floor(progressInPercentage)}`}&nbsp;%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
