import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {addNoteDraft, addNoteSave} from '../actions/actionCreators'

export default function Asidetop({saveObj}) {
  const [cssText, setCssText] = useState({countLine: 2, value: ''})
  const dispatch = useDispatch();

  const autosize = event => { // изменить размер тега textarea
    const numberOfLines = Math.ceil(event.target.scrollHeight/20)
    setCssText({...cssText, countLine: numberOfLines, value: event.target.value })
  }

  const draftHandler = () => {
    dispatch(addNoteDraft())
  }
  const saveHandler = () => {
    dispatch(addNoteSave())
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
