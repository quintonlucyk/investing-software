import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './App.scss';

function App() {

  // const loadCommentsFromServer = () => {
  //   fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=DG61VKY2XF1OVBWJ').then(function (response) {
  //     console.log(response);
  //   });
  // };

  return (
    <div className="App container">
      <div className="row justify-content-center m-4">
        <div className="col-6">
          <InputGroup >
            <FormControl
              placeholder="Symbol"
              aria-label="Symbol"
              id="symbol-search"
            />
            <InputGroup.Append>
              <Button >Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
