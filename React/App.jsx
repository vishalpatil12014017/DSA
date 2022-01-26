import React, { useState } from 'react';
import styled from 'styled-components'
const Toolbar = styled.header`
margin:auto;
text-align:center;
.App{
  position:relative;
}
.ball{
  width:100px;
  height:100px;
  border-radius:50%;
  background:red;
  position:absolute
  
}
`
function App() {
  const [position, setposition] = useState(0);
  const lefttop = {
left:0,
top:0
  }
  const righttop = {
    right:0,
    top:0
  }
  const bottomright = {
    right:0,
   bottom:0
  }
  const bottomleft = {
    left:0,
    bottom:0
  }
  const arr = [lefttop, righttop, bottomright, bottomleft]
 

  return (
    <Toolbar>
      
      <div className="App" style={{width:"100%",height:"650px"}}>
        <div className="ball" style={arr[position]}>
        </div>
        <button  onClick={()=>{
          position == 3 ? setposition(0) : setposition(position => position + 1)
        }} >change</button>
      </div>
    </Toolbar>
  );
}

export default App;
