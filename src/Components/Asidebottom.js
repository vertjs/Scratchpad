import React, {useState, useEffect} from 'react'

export default function Asidebottom({data, removeHandler, inMainHandler}) {

  return (
    <div className="asidebottom">
      <h3>Draft</h3>
      
      {data.length > 0 ? data.map(el => 
          <div className="asidebottomblock" key={el.id}>
            <textarea disabled value={el.text} ></textarea>
            <div className="buttons-draft for-large-screens">
              <button onClick={() => removeHandler(el)}>Remove</button>
              <button onClick={() => inMainHandler(el)}>Save</button>
            </div>
            <div className="buttons-draft for-small-screens">
              <button onClick={() => removeHandler(el)}>R</button>
              <button onClick={() => inMainHandler(el)}>S</button>
            </div>
          </div>
      ) : null }

    </div>
  )
}
