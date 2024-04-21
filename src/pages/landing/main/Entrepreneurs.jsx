import React from "react";
import { FaBriefcase } from "react-icons/fa";

export const Entrepreneurs = () => {
  const benefits = [
    {
      name: "Поиск талантов",
      description:
        "Находите перспективных студентов и выпускников, просматривайте их профили, достижения и рейтинги. Откройте для себя новые таланты для вашего бизнеса.",
    },
    {
      name: "Прямое взаимодействие",
      description:
        "Связывайтесь со студентами напрямую через платформу. Обсуждайте возможности стажировок, проектов или трудоустройства.",
    },
    {
      name: "Партнерство с ВУЗами",
      description:
        "Сотрудничайте с ВУЗами для организации мероприятий, хакатонов и конкурсов. Повышайте узнаваемость своего бренда среди студентов.",
    },
    {
      name: "Аналитика и статистика",
      description:
        "Получайте ценные данные и статистику о студентах, их навыках и интересах. Принимайте информированные решения при поиске кандидатов.",
    },
  ];

  return (
    <div
      className="bg-[url(/landing/bg4.png)] bg-cover bg-no-repeat"
      id="entrepreneurs"
    >
      <div className="container mx-auto max-w-[900px] px-5 text-black py-20 flex flex-col gap-y-10">
        <h2 className="text-6xl text-black uppercase text-center">
          Предпринимателям
        </h2>
        <ul className="grid grid-cols-2 gap-8">
          {benefits.map((item, index) => {
            return (
              <li key={index} className="flex gap-4 text-black">
                <div className="flex-shrink-0 mt-1">
                  <FaBriefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-2">{item.name}</h3>
                  <p className="text-xl">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};