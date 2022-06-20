
import { useState } from 'react';
import Header2 from './components/Header2';


function App() {
  const [parentCount, setParentCount] = useState(0)
  function addOneToCount() {
    setParentCount (parentCount +1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1> Total : {parentCount}</h1>
        <Header2 title={'First counter'} onButtonClick={addOneToCount}/>
        <Header2 title={'Second counter'} onButtonClick={addOneToCount}/>
      </header>
    </div>
  );
}

export default App;