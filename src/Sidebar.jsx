import React from 'react'
import 
{BsNut, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPercent, 
  BsListCheck, BsChatLeftDotsFill, BsFillGearFill,BsFillPeopleFill}
 from 'react-icons/bs'
 import { BiChevronRight } from "react-icons/bi"
 import { RiIncreaseDecreaseFill } from "react-icons/ri"

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsNut  className='icon_header'/> Dashbord     
            </div>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <div className='divv'>
                        <div>
                    <BsGrid1X2Fill className='icon'/> Dashboard 
                    </div> 
                    <div><BiChevronRight  className='icon_header'/>
                    </div>
                    </div>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <div className='divv'>
                    <div>
                    <BsFillArchiveFill className='icon'/> Products
                    </div> 
                    <div>
                    <BiChevronRight  className='icon_header'/>
                    </div>
                    </div>
                    </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <div className='divv'>
                    <div>
                    <BsFillPeopleFill className='icon'/> Customers
                    </div> 
                    <div>
                    <BiChevronRight  className='icon_header'/>
                    </div>
                    </div>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <div className='divv'>
                    <div>
                    <BsPercent className='icon'/> Income 
                    </div> 
                    <div>
                         <BiChevronRight  className='icon_header'/>
                
                    </div>
                    </div>
                    </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <div className='divv'>
                    <div>
                    <RiIncreaseDecreaseFill className='icon'/> Promote
                    </div> 
                    <div>
                          <BiChevronRight  className='icon_header'/>
                    </div>
                    </div>
                    </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <div className='divv'>
                    <div>
                    <BsChatLeftDotsFill className='icon'/> Help 
                    </div> 
                    <div> <BiChevronRight  className='icon_header'/>
                    </div>
                    </div>
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
