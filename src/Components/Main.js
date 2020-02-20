import React, {useState, useEffect}  from 'react'

export default function Main({data}) {


  return (
    <div className="main">
      {data.length > 0 ? data.map(el =>
        <div className="mainblock" key={el.id}>
          <textarea placeholder="Input" cols="30" value={el.text}></textarea>
          <span></span>
          <div className="buttons-mainblock">
            <button>Draft</button>
            <button>Mark</button>
          </div>
        </div>
      ) : null }
    </div>
  )
}
