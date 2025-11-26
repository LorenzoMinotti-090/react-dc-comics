const navLinks = [
  { label: "CHARACTERS", active: false },
  { label: "COMICS", active: true },
  { label: "MOVIES", active: false },
  { label: "TV", active: false },
  { label: "GAMES", active: false },
  { label: "COLLECTIBLES", active: false },
  { label: "VIDEOS", active: false },
  { label: "FANS", active: false },
  { label: "NEWS", active: false },
  { label: "SHOP", active: false },
];

export default function AppHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">

        <img className="logo" src="/img/dc-logo.png" alt="DC Logo" />

        <nav>
          <ul className="nav-links">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className={item.active ? "active" : ""}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}