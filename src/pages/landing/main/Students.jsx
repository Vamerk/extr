import React from "react";
import { FaGraduationCap } from "react-icons/fa";

export const Students = () => {
  const benefits = [
    {
      name: "Персонализация профиля",
      description:
        "Зарегистрируйтесь, выберите свой факультет, кафедру и группу, и создайте уникальный профиль. Загрузите фото, расскажите о себе и делитесь новостями с сокурсниками.",
    },
    {
      name: "Рейтинг достижений",
      description:
        "Отслеживайте свой прогресс и достижения с помощью рейтинговой системы. Получайте звезды за участие в мероприятиях и следите за своей историей успеха.",
    },
    {
      name: "Заявки на участие",
      description:
        "Легко подавайте заявки на участие в интересующих вас мероприятиях. Выбирайте из списка доступных событий и отправляйте заявки в несколько кликов.",
    },
    {
      name: "Ценность активностей",
      description:
        "Каждое мероприятие имеет свою ценность. Получайте больше баллов за участие в научных проектах, спортивных соревнованиях и других значимых событиях.",
    },
  ];

  return (
    <div
      className="bg-[url(/landing/bg3.png)] bg-cover bg-no-repeat"
      id="students"
    >
      <div className="container mx-auto max-w-[900px] px-5 text-black py-20 flex flex-col gap-y-10">
        <h2 className="text-6xl text-black uppercase text-center">
          Студентам
        </h2>
        <ul className="grid grid-cols-2 gap-8">
          {benefits.map((item, index) => {
            return (
              <li key={index} className="flex gap-4 text-black">
                <div className="flex-shrink-0 mt-1">
                  <FaGraduationCap size={24} />
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