import React from 'react'
import Block from './Block'

export default function Main({save, saveObj, indraftHandler, setArr}) {
  
  const onDraft = (el) => {
    saveObj(el.text, "draft")
    setArr(prev => prev.filter(o => o.id !== el.id))
    indraftHandler(el)
  }
  
  return (
    <div className="main">
      {save.length > 0 ? save.map(el =>
        <Block el={el} onDraft={onDraft} key={el.id} saveObj={saveObj} setArr={setArr} />
      ) : null }
    </div>
  )
}
