import React from "react";
import { FaUniversity } from "react-icons/fa";

export const Universities = () => {
  const benefits = [
    {
      name: "Личные кабинеты",
      description:
        "Удобные личные кабинеты для представителей ВУЗов и студентов. Управляйте информацией, взаимодействуйте с учащимися и оптимизируйте учебный процесс.",
    },
    {
      name: "Управление структурой",
      description:
        "Легко добавляйте и редактируйте информацию о факультетах, кафедрах и группах. Поддерживайте актуальность данных о структуре вашего ВУЗа.",
    },
    {
      name: "Активности и мероприятия",
      description:
        "Создавайте и управляйте мероприятиями различных типов: спортивные соревнования, творческие конкурсы, научные конференции и волонтерские акции.",
    },
    {
      name: "Контроль участия",
      description:
        "Следите за участием студентов в мероприятиях. Подтверждайте и оценивайте их достижения, мотивируя на дальнейшие успехи.",
    },
  ];

  return (
    <div
      className="bg-[url(/landing/bg2.png)] bg-cover bg-no-repeat"
      id="universities"
    >
      <div className="container mx-auto max-w-[900px] px-5 text-black py-20 flex flex-col gap-y-10">
        <h2 className="text-6xl text-black uppercase text-center">ВУЗам</h2>
        <ul className="grid grid-cols-2 gap-8">
          {benefits.map((item, index) => {
            return (
              <li key={index} className="flex gap-4 text-black">
                <div className="flex-shrink-0 mt-1">
                  <FaUniversity size={24} />
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