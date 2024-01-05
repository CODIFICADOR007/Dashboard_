import React, { useState } from "react";
import Logo from "../img/logo.png"
import photo from "../img/jetha.jpeg"
import "./Sidebar.css";
import { SidebarData } from "../Data/Data";
import { motion } from "framer-motion";
import {
  UilBars


} from "@iconscout/react-unicons";
function Sidebar() {
  const [first,setfirst] = useState();
  const [selected,setselected] = useState(0);
  const [expanded,setexpanded] = useState(true);

  console.log(window.innerWidth)
  return (
    <>
      <div className='Sidebar'
    >

      {/* logo */}
      <div className="logo">
        <img src={Logo} alt=""/> 
        <span>Skilify Admin</span>
      </div>
      {/* menu */}
    <div className="menu">
        {SidebarData.map((item,index)=>{
          return (
            <div className={selected===index?"menuitem active":"menuitem"} key={index}
            onClick={()=>{
              setselected(index)
            }}
            >
              <item.icon/>
            <span>
              {item.heading+` ${'\t'} ${">"}` }
            </span>
            </div>
          );
        })}
        <div className="act">

        
        {/* <img src={photo} alt="photo" /> */}
        {/* <button type="button">Success</button> */}

        </div>
        
    </div>

    </div>
        </>
  );
}

export default Sidebar;
