import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="vul" color="pink" isSpecial/>
      <Hello color="blue"/>
    </Wrapper>
  );
}

export default App;