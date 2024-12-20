import React, { useState } from 'react'
import MyContext from './myContext';
//tracks application's state (dark or light mode)
function MyState(props) {
  const [mode, setMode] = useState('light'); // light by default 
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <MyContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState