import "./header.scss";

function Header({openMenu, setOpenMenu}) {
  return (
    // {`header ${openMenu ? 'active' : ''}`}
    <div className={`header ${openMenu ? "active": ""}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="items">
            <i class="fa-regular fa-envelope fa-bounce"></i>
            <a href="mailto: hameedurrehman35@gmail.com">
              hameedurrehman35@gmail.com
            </a>
          </div>
          <div className="items">
          <i class="fa-solid fa-phone fa-bounce"></i>
            <a href="tel:+923184100981">+92 (318) 4100 981</a>
          </div>
          {/* <div className="items">
            <a href="https://www.linkedin.com/in/hameeedurrehman/"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <div className="items">
            <a href="https://github.com/hameeedurrehman"><i class="fa-brands fa-github"></i></a>
          </div>
          <div className="items">
            <a href="https://twitter.com/hameeedurrehman"><i class="fa-brands fa-twitter"></i></a>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setOpenMenu(!openMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
