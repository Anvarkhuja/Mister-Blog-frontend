import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">MISTER's</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg"
       src="https://images.pexels.com/photos/3695297/pexels-photo-3695297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="" />
    </div>
  )
}
