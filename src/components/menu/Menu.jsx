import "./menu.scss"

function Menu({openMenu, setOpenMenu}) {
  return (
    <div className={`menu ${openMenu ? "active": ""}`}>
        <ul>
            <li onClick={()=> setOpenMenu(false)}><a href="#intro">Home</a></li>
            <li onClick={()=> setOpenMenu(false)}><a href="#workdone">Projects</a></li>
            <li onClick={()=> setOpenMenu(false)}><a href="#testimonials">Testimonials</a></li>
            <li onClick={()=> setOpenMenu(false)}><a href="#contact">Contact Me</a></li>
        </ul>
    </div>
  )
}

export default Menu