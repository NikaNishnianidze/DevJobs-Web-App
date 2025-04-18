import logo from "../../public/assets/desktop/logo.svg";
import sunIcon from "../../public/assets/desktop/icon-sun.svg";
import moonIcon from "../../public/assets/desktop/icon-moon.svg";
import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  return (
    <div className="flex flex-col items-center">
      <header className="w-[375px] h-[136px] px-[24px] pt-[32px] flex items-start justify-between tb:w-[768px] tb:pt-[42px] tb:px-[39px] dk:w-[1440px]">
        <div className="img">
          <img src={logo} alt="DevJobs Logo" />
        </div>
        <div className="darkmode">
          <div className="themes flex flex-row justify-end items-center gap-[8px]">
            <img src={sunIcon} alt="sun icon" />
            <label className="switch">
              <input
                type="checkbox"
                className="checkbox"
                onClick={toggleDarkMode}
              />
              <span className="slider"></span>
            </label>
            <img src={moonIcon} alt="moon icon" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
