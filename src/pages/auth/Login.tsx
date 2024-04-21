import React from "react";
import "../../App.css";
import * as Api from "../../api";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [blank, setBlank] = React.useState({
    email: "",
    password: "",
  });

  const onSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const { data } = await Api.auth.login(blank);

      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);

      return navigate("/");
    } catch (error) {
      throw new Error("Failed to login " + error);
    }
  };

  return (
    <>
      <div className="container max-w-md mx-auto px-4 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <div className="text-center">
            <h2 className="py-2 text-xl bg-violet-600 scale-105 text-white">
              Вход
            </h2>
          </div>
          <div className="bg-white shadow-lg px-16 py-8 rounded-lg">
            <form onSubmit={onSubmit}>
              <div>
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
                <button
                  className="w-full rounded bg-violet-100 border-2 border-violet-200 text-violet-600 text-sm px-4 py-2 transition-colors font-medium hover:bg-violet-600 hover:text-white"
                  type="submit"
                >
                  Войти
                </button>
              </div>
            </form>
          </div>
          <div className="px-16 py-4 text-center">
            <div className="mt-4">
              <span className="text-sm text-zinc-400 text-center">
                Если у вас ещё нет аккаунта, то вы можете{" "}
                <Link to="/auth/register/student/" className="text-violet-400">
                  зарегистрироваться
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

export default Login;
