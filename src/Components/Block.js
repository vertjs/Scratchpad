import React, {useState, useEffect} from 'react'

export default function Block({el, onDraft, saveObj, setArr}) {
    const [color, setColor] = useState("red")

    const changeMark = (el) => {
      setColor(color ==="red" ? "green" : "red")
      setArr(prev => prev.filter(o => o.id !== el.id))
    }

    useEffect(() => {
      saveObj(el.text, "save", color, el.id)
  }, [color])

    return (
        <div className="mainblock" >
          <textarea disabled placeholder="Input" cols="30" value={el.text}></textarea>
          <span style={{backgroundColor: `${color}`}}></span>
          <div className="buttons-mainblock">
            <button onClick={() => onDraft(el)}>Draft</button>
            <button onClick={() => changeMark(el)}>Mark</button>
          </div>
        </div>
    )
}
