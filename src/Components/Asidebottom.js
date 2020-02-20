import React, {useState, useEffect} from 'react'

export default function Asidebottom({data, removeHandler}) {
  const [dataBottom, setDataBottom] = useState(data) 

  useEffect(() => {
    setDataBottom(data)
  }, [data]) 



  return (
    <div className="asidebottom">
      <h3>Draft</h3>
      
      {dataBottom.length > 0 ? dataBottom.map(el => 
          <div className="asidebottomblock" key={el.id}>
            <textarea disabled value={el.text} ></textarea>
            <div className="buttons-draft for-large-screens">
              <button onClick={() => removeHandler(el)}>Remove</button>
              <button>Save</button>
            </div>
            <div className="buttons-draft for-small-screens">
              <button onClick={() => removeHandler(el)}>R</button>
              <button>S</button>
            </div>
          </div>
      ) : null }

    </div>
  )
}
