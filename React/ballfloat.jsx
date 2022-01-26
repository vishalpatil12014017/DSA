import React from 'react'
import styled from 'styled-components'
const Toolbar = styled.header`
  position:relative;
  .ball{
width:50px;
height:50px;
border-radius:50%;
background:red;
position:absolute;
animation:movement 3s linear infinite;
left:0
}
@keyframes movement{
  100%{
    left:100%;
  }
}
`
function App() {

  return (
    <Toolbar>
      <div className="App">
        
      </div>
      <div className="left">
        <div className='ball'></div>
      </div>
    </Toolbar>
  );
}

export default App;
