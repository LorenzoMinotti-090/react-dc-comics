export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <img className="logo" src="/assets/img/dc-logo.png" alt="DC Logo" />

        <nav>
          <ul className="nav-links">
            <li>CHARACTERS</li>
            <li className="active">COMICS</li>
            <li>MOVIES</li>
            <li>TV</li>
            <li>GAMES</li>
            <li>COLLECTIBLES</li>
            <li>VIDEOS</li>
            <li>FANS</li>
            <li>NEWS</li>
            <li>SHOP</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}