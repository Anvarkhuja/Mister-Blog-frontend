
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import {axiosInstance} from "../../config";

export default function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
      const getCats = async ()=>{
        const res = await axiosInstance.get("/categories")
        setCats(res.data);
      };
      getCats();
  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/598966/pexels-photo-598966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Ut sunt explicabo pariatur ipsa possimus eum tempora vel 
           
              </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        {cats.map((c) => (
  <li className="sidebarListItem">
  <Link className="link" to={`/?cat=${c.name}`}>
        {c.name}
      </Link>
  </li>
        ))}
      
     
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
      <i className="sidebarIcon fa-brands fa-square-facebook"></i>
      <i className="sidebarIcon fa-brands fa-square-twitter"></i>
      <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
      </div>
      </div>
    </div>
  )
}
