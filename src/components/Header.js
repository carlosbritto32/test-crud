import "../style/Header.css";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";

function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

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
          <button onClick={openModal}>Add</button>
        </nav>
        <Modal isOpenModal={isOpenModal} closeModal={closeModal} />
      </div>
    </header>
  );
}

export default Header;
