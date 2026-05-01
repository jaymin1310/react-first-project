import img from "../assets/react-logo.png";
function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={img} className="img" alt="React logo" />
        <span Id="logo-text">React Fact</span>
      </div>
      <ul>
        <nav className="nav-list">
          <li className="nav-item-list">Pricing</li>
          <li className="nav-item-list">About</li>
          <li className="nav-item-list">Contact</li>
        </nav>
      </ul>
    </header>
  );
}

export default Header;
