import React, {useState, useEffect} from 'react'

export default function Header({blocks}) {
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if(blocks.length > 0) {
      const res = blocks.filter(o => o.span === "green") 
      setAmount(res.length)
    }
}, [blocks])

  return (
    <div className="header">
      <h1>React app for Aventica</h1>
      <h2>{amount}</h2>
    </div>
  )
}
