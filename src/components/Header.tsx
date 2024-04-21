import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SelectUser } from "../redux/user/selector";
import { checkAuth } from "../utils/checkAuth";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

export const Header: React.FC = () => {
  checkAuth();

  const user = useSelector(SelectUser);

  const [isOpen, setIsOpen] = React.useState(false);
  const [isAuth, setIsAuth] = React.useState(user.id !== 0);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsAuth(user.id !== 0);
    const handleClickOutside = (ev: MouseEvent) => {
      if (ref.current && !ref.current.contains(ev.target as Node)) {
        toggleProfile();
        console.log();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  const onExit = () => {
    setIsAuth(false);

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  return (
    <header className="bg-white shadow shadow-zinc-200">
      <div className="flex container max-w-screen-xl mx-auto justify-between items-center p-4">
        <Link to="/">
          <div className="flex flex-row items-center">
            <PiStudentBold className="text-3xl mr-2" />
            <h1 className="text-2xl font-semibold">LifeCourse</h1>
          </div>
        </Link>

        {isAuth ? (
          <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={toggleProfile}>
              <div>
                <img
                  src="https://images.genius.com/782d3846b72673a559ef3fcc3b48f4d9.1000x1000x1.jpg"
                  alt="logo"
                  className="w-10 h-10 rounded-full mr-2"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-sm font-medium text-zinc-600">
                  {user.firstname + " " + user.lastname}
                </h2>
                <div className="text-xs text-zinc-400">
                  {user.type == "STUDENT" ? "Студент" : "Представитель ВУЗа"}
                </div>
              </div>
            </div>
            {isOpen && (
              <div
                ref={ref}
                className="absolute -left-5 right-0 bg-white z-50 shadow-lg border mt-4"
              >
                <Link
                  to={`/profile/${user.id}`}
                  className="flex items-center gap-2 p-2 text-sm text-zinc-600 hover:text-violet-600 hover:bg-violet-50"
                  onClick={toggleProfile}
                >
                  <FaRegUserCircle className="w-4 h-4"></FaRegUserCircle>
                  Профиль
                </Link>
                <button
                  onClick={onExit}
                  className="flex w-full items-center gap-2 p-2 text-sm text-zinc-600 hover:text-violet-600 hover:bg-violet-50"
                >
                  <IoMdExit className="w-4 h-4"></IoMdExit>
                  Выйти
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-row">
            <Link
              to="/auth/login"
              className="w-auto bg-blue-500 text-white py-2 px-4 text-xl mx-2 flex flex-row items-center justify-center rounded hover:bg-blue-600"
            >
              Войти
            </Link>
            <Link
              to="/auth/register/student"
              className="w-auto bg-blue-500 text-white py-2 px-4 text-xl flex flex-row items-center justify-center rounded hover:bg-blue-600"
            >
              Зарегистрироваться
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
