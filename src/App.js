import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Asidetop from './Components/Asidetop';
import Asidebottom from './Components/Asidebottom';
import Main from './Components/Main';
import nanoid from 'nanoid'

export default function App() {
  const [arr, setArr] = useState([]) 
  const [draft, setDraft] = useState([])
  const [save, setSave] = useState([])

  const saveObj = (input, ind, color = "red", id=nanoid()) => {
    setArr([...arr, {id: id, text: input, index: ind, mark: color}]) 
  }

  const removeHandler = (el) => {
    setDraft(prev => prev.filter(o => o.id !== el.id))
    setArr(prev => prev.filter(o => o.id !== el.id))
  }

  const indraftHandler = (el) => {
    setSave(prev => prev.filter(o => o.id !== el.id))
    setArr(prev => prev.filter(o => o.id !== el.id))
  }

  const inMainHandler = (el) => {
    setDraft(prev => prev.filter(o => o.id !== el.id))
    setSave([...save, {id: el.id, text: el.text, index: el.index, mark: "red"}]) 
    setArr(prev => prev.filter(o => o.id !== el.id))
  }


  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    arr.length > 0 ?
    arr.map(o => {
      if(o.text !== "") {
        if(o.index === "save") {
          if(save.length !== 0) {
            let res = save.filter(s => s.id === o.id)
            // eslint-disable-next-line no-unused-expressions
            res.length === 0 ? 
            setSave([...save, {id: o.id, text: o.text, index: o.index, mark: "red"}]) 
            : null
          } else {
            setSave([...save, {id: o.id, text: o.text, index: o.index, mark: "red"}]) 
          }
        } else if(o.index === "draft") {
            if(draft.length !== 0) {
              let res = draft.filter(d => d.id === o.id)
              // eslint-disable-next-line no-unused-expressions
              res.length === 0  ? 
              setDraft([...draft, {id: o.id, text: o.text, index: o.index, mark: "red"}])
              : null
            } else {
              setDraft([...draft, {id: o.id, text: o.text, index: o.index, mark: "red"}])
            }
          }
      }
    }) : null    
  }, [arr])

   return (
    <div className="grid">
      <div className="container">
        <Header blocks={save}  />
        <Asidetop saveObj={saveObj}/> 
        <Asidebottom data={draft} removeHandler={removeHandler} inMainHandler={inMainHandler}/>
        <Main data={save} saveObj={saveObj} indraftHandler={indraftHandler} />
      </div>
    </div>
  );
}