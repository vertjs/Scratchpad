import React, {useState, useEffect} from 'react'

export default function Block({el, onDraft, data, saveObj}) {
    const [indicator, setIndicator] = useState("red")

    const changeMark = (el) => {
      saveObj(el.text, el.save, el.mark ==="red" ? el.mark = "green" : el.mark = "red", el.id)
      setIndicator(indicator ==="red" ? "green" : "red")
    }

 
   useEffect(() => {
    console.log(data)
  }, [data]) 

    return (
        <div className="mainblock" >
          <textarea disabled placeholder="Input" cols="30" value={el.text}></textarea>
          <span style={{backgroundColor: `${indicator}`}}></span>
          <div className="buttons-mainblock">
            <button onClick={() => onDraft(el)}>Draft</button>
            <button onClick={() => changeMark(el)}>Mark</button>
          </div>
        </div>
    )
}
