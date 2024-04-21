import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const InformationSection = ({ desc, name, id, benefit }) => {
  return (
    <div className="bg-[url(/landing/bg5.png)] bg-cover bg-no-repeat" id={id}>
      <div className="container mx-auto max-w-[900px] px-5 text-black py-20 flex flex-col gap-y-10">
        <h2 className="text-6xl text-black uppercase text-center">{name}</h2>
        <p className="text-xl text-center">{desc}</p>
        <ul className="grid grid-cols-2 gap-8">
          {benefit.map((item, index) => {
            return (
              <li key={index} className="flex gap-4 text-black">
                <div className="flex-shrink-0 mt-1">
                  <FaCheckCircle size={24} />
                </div>
                <div>
                  <p className="text-xl">{item}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default InformationSection;
// import React from "react";
// import { GiAlliedStar } from "react-icons/gi";


// const InformationSection = ({desc, name, id, benefit}) => {
//     console.log(benefit);
//   return (
//     <div
//       className="container mx-auto max-w-[700px] px-5 py-20 flex flex-col"
//     >
//       <h2 className=" text-4xl  uppercase mb-5 md:text-6xl">{name}</h2>
//       <p className=" mb-10 md:text-lg">{desc}</p>
//       <ul className="grid gap-x-5 gap-y-5 grid-cols-[repeat(2,1fr)] grid-rows-[repeat(5,1fr)] ;">
//         {benefit.map((items, index) => {
//           return (
//             <li
//               key={index}
//               className="flex items-center gap-x-2 text-xs md:text-lg "
//             >
//             <GiAlliedStar/>    {items}
//             </li> 
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default InformationSection;