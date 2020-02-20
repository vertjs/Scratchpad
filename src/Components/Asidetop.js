import React, {useState} from 'react'

export default function Asidetop({saveObj}) {
  const [cssText, setCssText] = useState({countLine: 2, value: ''})

  const autosize = event => { // изменить размер тега textarea
    const numberOfLines = Math.ceil(event.target.scrollHeight/20)
    setCssText({...cssText, countLine: numberOfLines, value: event.target.value })
  }

  const draftHandler = () => { 
    saveObj(cssText.value, "draft") // сохранить  в Draft
    setCssText({value: ''})
  }
  const saveHandler = () => { 
    saveObj(cssText.value, "save") // сохранить  в Main
    setCssText({value: ''})
  }

  return (
    <div className="asidetop">
      <textarea style={{ 'padding': 0 }} 
        rows={cssText.countLine} 
        value={cssText.value}
        placeholder={"Input"}
        onChange={autosize} >
      </textarea>
      <div className="buttons">
        <button onClick={draftHandler}>Draft</button>
        <button onClick={saveHandler}>Save</button>
      </div>
    </div>
  )
}
