import React from "react";
import "../../App.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SelectRegistrationBlank } from "../../redux/registrationBlank/selector";
import { changeBlank } from "../../redux/registrationBlank/slice";
import { useAppDispatch } from "../../redux/store";
import * as Api from "../../api";
import { PiStudent, PiChalkboardTeacher } from "react-icons/pi";

const UserRegistration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [currentTab, setCurrentTab] = React.useState("student");
  const [blank, setBlank] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });
  const registrationBlank = useSelector(SelectRegistrationBlank);

  React.useEffect(() => {
    setBlank(registrationBlank);
  }, []);

  const onSubmit = async (ev) => {
    ev.preventDefault();
    dispatch(changeBlank(blank));

    if (currentTab === "student") {
      return navigate("university");
    }

    const { data } = await Api.auth.registerDelegate(blank);

    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
  };

  return (
    <>
      <div className="container max-w-xl mx-auto px-4 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <div className="text-center">
            <h2 className="py-2 text-xl bg-violet-600 scale-105 text-white">
              Регистрация
            </h2>
          </div>
          <div className="bg-white shadow-lg px-16 py-8 rounded-lg">
            <div className="flex gap-4">
              <div
                className={[
                  "flex gap-2 border-b-4 cursor-pointer py-4",
                  currentTab == "student"
                    ? "border-violet-400"
                    : "border-transparent",
                ].join(" ")}
                onClick={() => setCurrentTab("student")}
              >
                <div>
                  <PiStudent
                    className={[
                      "w-10 h-10",
                      currentTab == "student" ? "text-violet-600" : "",
                    ].join(" ")}
                  ></PiStudent>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Студент</h3>
                  <span className="text-xs l font-light">
                    Учавствуйте в мероприятиях и получайте рейтинг.
                  </span>
                </div>
              </div>

              <div
                className={[
                  "flex gap-2 border-b-4 cursor-pointer py-4",
                  currentTab == "delegate"
                    ? "border-violet-400"
                    : "border-transparent",
                ].join(" ")}
                onClick={() => setCurrentTab("delegate")}
              >
                <div>
                  <PiChalkboardTeacher
                    className={[
                      "w-10 h-10",
                      currentTab == "delegate" ? "text-violet-600" : "",
                    ].join(" ")}
                  ></PiChalkboardTeacher>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Представитель вуза</h3>
                  <span className="text-xs l font-light">
                    Проводите мероприятия на нашей платформе.
                  </span>
                </div>
              </div>
            </div>

            <form className="mt-8" onSubmit={onSubmit}>
              <div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium">Имя</span>
                  <input
                    className="text-sm px-4 py-2 rounded border border-gray-200"
                    type="text"
                    value={blank.firstname}
                    onChange={(ev) =>
                      setBlank((prev) => ({
                        ...prev,
                        firstname: ev.target.value,
                      }))
                    }
                  />
                </label>
              </div>
              <div className="mt-4">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium">Фамилия</span>
                  <input
                    className="text-sm px-4 py-2 rounded border border-gray-200"
                    type="text"
                    value={blank.lastname}
                    onChange={(ev) =>
                      setBlank((prev) => ({
                        ...prev,
                        lastname: ev.target.value,
                      }))
                    }
                  />
                </label>
              </div>
              <div className="mt-4">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium">Почта</span>
                  <input
                    className="text-sm px-4 py-2 rounded border border-gray-200"
                    type="email"
                    value={blank.email}
                    onChange={(ev) =>
                      setBlank((prev) => ({ ...prev, email: ev.target.value }))
                    }
                  />
                </label>
              </div>
              <div className="mt-4">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium">Пароль</span>
                  <input
                    className="text-sm px-4 py-2 rounded border border-gray-200"
                    type="password"
                    value={blank.password}
                    onChange={(ev) =>
                      setBlank((prev) => ({
                        ...prev,
                        password: ev.target.value,
                      }))
                    }
                  />
                </label>
              </div>
              <div className="mt-4">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium">
                    Подтвердите пароль
                  </span>
                  <input
                    className="text-sm px-4 py-2 rounded border border-gray-200"
                    type="password"
                    value={blank.passwordRepeat}
                    onChange={(ev) =>
                      setBlank((prev) => ({
                        ...prev,
                        passwordRepeat: ev.target.value,
                      }))
                    }
                  />
                </label>
              </div>
              <div className="mt-4">
                <button
                  className="w-full rounded bg-violet-100 border-2 border-violet-200 text-violet-600 text-sm px-4 py-2 transition-colors font-medium hover:bg-violet-600 hover:text-white"
                  type="submit"
                >
                  {currentTab === "student" ? "Далее" : "Зарегистрироваться"}
                </button>
              </div>
            </form>
          </div>
          <div className="px-16 py-4 text-center">
            <div className="mt-4">
              <span className="text-sm text-zinc-400 text-center">
                Если у вас уже есть аккаунт, то вы можете{" "}
                <Link to="/auth/login/" className="text-violet-400">
                  войти
                </Link>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegistration;
