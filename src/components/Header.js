import "../style/Header.css";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

function Header() {
  return (
    <header className="header-container">
      <div className="button-container">
        <p>UsBlog</p>
        <button>
          <FaRegSun />
        </button>
        <button>
          <FaRegMoon />
        </button>
      </div>
      <div className="nav-container">
        <nav>
          <p>let's create your user!</p>
          <button>Add</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
