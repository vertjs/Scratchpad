import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Asidetop from './Components/Asidetop';
import Asidebottom from './Components/Asidebottom';
import Main from './Components/Main';
import nanoid from 'nanoid'
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const [arr, setArr] = useState([{id: "", text: "", index: ""}])
  const [draft, setDraft] = useState([])
  const [save, setSave] = useState([])

  /*
  const saveObj = (input, ind) => {
    //console.log(text)
    setArr([...arr, {id: nanoid(), text: input, index: ind}]) 
  }

  const removeHandler = (el) => {
    console.log(el)
    let res = arr.filter(o => o.id !== el.id)
    console.log(res)
    setDraft(res)
  } 

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    arr.length > 1 ?
    arr.map(o => {
      if(o.text !== "") {
        if(o.index === "save") {
          if(save.length !== 0) {
            let res = save.filter(s => s.id === o.id)
            // eslint-disable-next-line no-unused-expressions
            res.length === 0 ? 
            setSave([...save, {id: o.id, text: o.text, index: o.index}]) 
            : null
          } else {
            setSave([...save, {id: o.id, text: o.text, index: o.index}]) 
          }
        } else if(o.index === "draft") {
            if(draft.length !== 0) {
              let res = draft.filter(d => d.id === o.id)
              // eslint-disable-next-line no-unused-expressions
              res.length === 0  ? 
              setDraft([...draft, {id: o.id, text: o.text, index: o.index}])
              : null
            } else {
              setDraft([...draft, {id: o.id, text: o.text, index: o.index}])
            }
          }
      }
    }) : null    
  }, [arr])

*/

  return (
    <div className="grid">
      <div className="container">
        <Header/>
        <Asidetop /> {/* saveObj={saveObj} */}
        <Asidebottom data={draft} /*removeHandler={removeHandler}*//>
        <Main data={save}/>
      </div>
    </div>
  );
}