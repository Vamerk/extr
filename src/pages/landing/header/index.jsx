import React from "react";
import { Link } from "react-router-dom";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";

export const Header = () => {
  const WORKER_MENU = [
    {
      title: "О нас",
      href: "#implementation",
    },

    {
      title: "ВУЗам",
      href: "#universities",
    },
    {
      title: "Студентам",
      href: "#students",
    },
    {
      title: "Предпринимателям",
      href: "#entrepreneurs",
    },
  ];
  return (
    <div className="w-full bg-white text-black py-4">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img
                className="h-8"
                src=""
                alt="Logo"
              />
            </Link>
          </div>
          <ul className="hidden lg:flex gap-x-8">
            {WORKER_MENU.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    className="text-gray-600 hover:text-blue-600 font-medium duration-300"
                    href={item.href}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-x-4">
            <TEDropdown>
              <TERipple rippleColor="light">
                <TEDropdownToggle
                  tag="a"
                  className="flex items-center whitespace-nowrap rounded bg-blue-600 px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  Вход/Регистрация
                  <span className="ml-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </TEDropdownToggle>
              </TERipple>
              <TEDropdownMenu>
                <TEDropdownItem>
                  <Link to="/auth/login">
                    <a href="#" className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Для ВУЗа
                    </a>
                  </Link>
                </TEDropdownItem>
                <TEDropdownItem>
                  <Link to="/auth/login">
                    <a href="#" className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Для студента
                    </a>
                  </Link>
                </TEDropdownItem>
                <TEDropdownItem>
                  <Link to="/auth/login">
                    <a href="#" className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Для предприятия
                    </a>
                  </Link>
                </TEDropdownItem>
              </TEDropdownMenu>
            </TEDropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
//   return (
//     <div className="w-full lg bg-white text-black py-4 px-5">
//       <div className=" mx-auto max-w-[900px] px-5">
//         <div className="flex justify-between items-center flex-wrap gap-y-2  ">
//           <div>
//             {" "}
//             <Link to="/">
//               <img className="h-5" src="/vite.svg" alt="" />
//             </Link>
//           </div>
//           <ul className="flex gap-x-5  justify-end">
//             {WORKER_MENU.map((item, index) => {
//               return (
//                 <li key={index} className="items-end">
//                   <a
//                     className="cursor-pointer duration-300 hover:text-blue-600"
//                     key={index}
//                     href={item.href}
//                   >
//                     {item.title}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
          
//           <div className="flex gap-x-2 gap-y-2 flex-wrap">
//             <TEDropdown className="flex justify-center">
//               <TERipple rippleColor="light">
//                 <TEDropdownToggle
//                   tag="a"
//                   className="flex items-center whitespace-nowrap pointer-events-auto cursor-pointer rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 motion-reduce:transition-none "
//                 >
//                   Вход/Регистрация
//                   <span className="ml-2 [&>svg]:w-5 w-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </span>
//                 </TEDropdownToggle>
//               </TERipple>

//               <TEDropdownMenu>
//                 <TEDropdownItem>
//                   <Link to="/auth/login">
//                     <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline ">
//                       Для ВУЗа
//                     </a>
//                   </Link>

//                 </TEDropdownItem>
//                 <TEDropdownItem>
//                   <Link to="/auth/login">
//                     <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline ">
//                       Для студента
//                     </a>
//                   </Link>
                  
//                 </TEDropdownItem>
//                 <TEDropdownItem>
//                   <Link to="/auth/login">
//                     <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline ">
//                       Для предприятия
//                     </a>
//                   </Link>
                  
//                 </TEDropdownItem>
//               </TEDropdownMenu>
//             </TEDropdown>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };





{/* <ul className="flex gap-x-5  justify-end">
            {WORKER_MENU.map((item, index) => {
              return (
                <li key={index} className="items-end">
                  <a
                    className="cursor-pointer duration-300 hover:text-blue-600"
                    key={index}
                    href={item.href}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul> */}