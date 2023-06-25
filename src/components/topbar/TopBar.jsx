import { useContext } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import "./topbar.css"

export default function Topbar() {
  const {user, dispatch} = useContext(Context); 
  const PF = "https://mister-blog-backend.vercel.app/api/upload";

const handleLogout = () =>{
  dispatch({type:"LOGOUT"})
};
  return (
    <div className='top'>
      {/* <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      </div> */}
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
            </li>
            {/* <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li> */}
            <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
        </ul>
      </div>
      <div className="topRight">
      {user ? (
        <Link to="/settings" >
        <img 
          className="topImg"
          src={PF+user.profilePic}
           alt="" />
        </Link>
       
          ) : (
            <ul className="topList">
              <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
             </li>
             <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
            </li>
            </ul>
          )
        }
      
         {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  )
}
