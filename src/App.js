import React from 'react';
import './App.css';
import Contact from './Contact'

const arr = [
  {
    name: "Sarra",
    tel: 12557
  },
  {
    name: "wala",
    tel: 1257412557
  },
  {
    name: "Slim",
    tel: 122222
  },
  {
    name: "Wissem",
    tel: 125555
    },
    {
      name: "7amma",
      tel: 4845
      }
]


function App() {
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
      {
        arr.map(el => <Contact name={el.name} tel={el.tel}/>)
      }
     
    </div>
  );
}

export default App;
