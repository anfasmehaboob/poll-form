import React, { useState } from 'react'

function Polls({value}) {
    const [isValid, setisValid] = useState(value)

   
  return (
    <div  className=" w-4 h-4 rounded-lg bg-white mb-1 flex justify-center items-center">
     {isValid && <div className=" w-2 h-2 bg-slate-800 rounded"></div>}
  </div>
  )
}

export default Polls