import { useState } from 'react';
import './App.css'
import PianoSelector from './components/PianoSelector';
import PianoWrapper from './components/PianoWrapper';

const App = () =>  {
  const [selectedSize, setSelectedSize] = useState();

  return (
    <div className="App">
      <h1>Next Chord Picker</h1>
      <div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <PianoSelector
            onChange={setSelectedSize}
          />
        </div>
        <PianoWrapper
          selectedSize={selectedSize}
        />
      </div>
    </div>
  )
};

export default App;
