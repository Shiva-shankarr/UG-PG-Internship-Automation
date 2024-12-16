import React, { useState } from 'react'
import {StudUsername} from './CredContext'
function CredStore({children}) {
let[studusername,setStdUsername]=useState([])
  return (
        <StudUsername.Provider value={[studusername,setStdUsername]}>
            {children}
        </StudUsername.Provider>
  )
}

export default CredStore