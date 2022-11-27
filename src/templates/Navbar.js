import "./Navbar.css"

function Navbar(){
  return (
    <div>
      <div id="sidebar" class = "col-s-1 col-13">
        <img id="headerlogo" src="/img/Bonekify.png" />
        <a href="#">Daftar Album</a>
      </div>
      <div id="side">
        <div class="topnav">
          <div class="dropdown">
            <button class="dropbtn">
              NOT LOGGED IN
            </button>
            <a href="#">Log in</a>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default Navbar