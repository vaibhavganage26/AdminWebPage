import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { FaHand } from "react-icons/fa6"

function Header({OpenSidebar}) {
  return (
    <header className='header1'>
        <div className='header-left'>
            <b>Hello Shahrukh </b><FaHand/>
        </div>
        <div className='header'>

        <div className='header-right'>
            <BsSearch  className='icon'/>search
        </div>
        </div>
    </header>
  )
}

export default Header