import "./Header.css"

function Header() {
  return <header id="header">
    <div className="conteiner">
      <div className="header">
        <div className="antools">
            <h1><b>antools</b></h1>
        </div>
        <div className="Home">
          <p>Home</p>
          <p>Categories</p>
          <p>My Collections</p>
          <p>Blog</p>
        </div>
        <div className="Login">
          <h6>Login</h6>
          <button>Sing up</button>
          
        </div>
      </div>
    </div>
  </header>
  
}
export default Header