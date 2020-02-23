import React, {useEffect, useState} from 'react'
import Block from './Block'

export default function Main({data, saveObj, indraftHandler}) {
  
  const onDraft = (el) => {
    saveObj(el.text, "draft")
    indraftHandler(el)
  }
  
  useEffect(() => {
    console.log(data)
  }, [data])


  return (
    <div className="main">
      {data.length > 0 ? data.map(el =>
        <Block el={el} onDraft={onDraft} key={el.id} data={data} saveObj={saveObj} />
      ) : null }
    </div>
  )
}
