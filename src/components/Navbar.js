import { Chart, Home, Messages, Profile, Ticket } from "./Svg";

const Navbar = () => {
  //Home, Tickets, Profile, Chat, Charts
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo192.png" alt="logo" height="80px" width="80px" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link">
            <Home />
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link selected-link">
            <Ticket />
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">
            <Profile />
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">
            <Messages />
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">
            <Chart />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
