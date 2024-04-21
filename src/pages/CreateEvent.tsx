import React from "react";
import { useParams } from "react-router-dom";
import AsyncSelect from "react-select";
import * as Api from "../api";

const eventTypeOptions = [
  { value: "Спорт", label: "Спорт", id: 1 },
  { value: "Наука", label: "Наука", id: 2 },
  { value: "Волонтерство", label: "Волонтерство", id: 3 },
  { value: "Творчество", label: "Творчество", id: 4 },
];

const CreateEvent = () => {
  const { university_id } = useParams();

  const [blank, setBlank] = React.useState({
    name: "",
    content: "",
    started_at: "",
    finished_at: "",
    type_id: "",
    university_id,
  });
  const [eventType, setEventType] = React.useState({
    value: "",
    label: "",
    id: 0,
  });

  const onSubmit = async (ev) => {
    ev.preventDefault();

    const data = await Api.events.create(blank);

    console.log(data);
  };

  const handleClick = (option) => {
    setEventType({ value: option.value, label: option.label, id: option.id });

    setBlank((prev) => ({ ...prev, type_id: option.id }));
  };

  return (
    <div className="p-4 bg-white rounded-lg relative flex justify-center">
      <form
        onSubmit={onSubmit}
        className="p-4 flex flex-col justify-center items-center text-center max-w-screen-md w-full"
      >
        <h1 className="text-3xl my-2">Создайте мероприятие</h1>

        <div className="mb-4 relative w-full">
          <input
            id="title"
            type="text"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-3 pt-4"
            required
            value={blank.name}
            onChange={(ev) =>
              setBlank((prev) => ({ ...prev, name: ev.target.value }))
            }
          />
          <label
            htmlFor="title"
            className="absolute left-2 top-3 text-black transition-all duration-300"
          >
            Название мероприятия
          </label>
        </div>

        <div className="mb-4 relative w-full">
          <input
            id="content"
            type="text"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-3 pt-4"
            value={blank.content}
            required
            onChange={(ev) =>
              setBlank((prev) => ({ ...prev, content: ev.target.value }))
            }
          />
          <label
            htmlFor="content"
            className="absolute left-2 top-3 text-black transition-all duration-300"
          >
            Описание
          </label>
        </div>

        <div className="mb-4 relative w-full flex flex-col items-start">
          <label htmlFor="startDate">Начало</label>
          <input
            id="startDate"
            type="date"
            content="asd"
            value={
              blank.started_at
                ? new Date(blank.started_at).toISOString().split("T")[0]
                : ""
            }
            className="w-full"
            onChange={(ev) =>
              setBlank((prev) => ({
                ...prev,
                started_at: new Date(ev.target.value).toISOString(),
              }))
            }
          />
        </div>

        <div className="mb-4 relative w-full flex flex-col items-start">
          <label htmlFor="startDate">Конец</label>
          <input
            id="startDate"
            type="date"
            content="asd"
            value={
              blank.finished_at
                ? new Date(blank.finished_at).toISOString().split("T")[0]
                : ""
            }
            className="w-full"
            onChange={(ev) =>
              setBlank((prev) => ({
                ...prev,
                finished_at: new Date(ev.target.value).toISOString(),
              }))
            }
          />
        </div>

        <AsyncSelect
          placeholder="Тип мероприятия"
          className="my-2 w-full"
          required
          options={eventTypeOptions}
          defaultInputValue={eventType.value}
          onChange={(selectedOption) => handleClick(selectedOption)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 mt-5 px-4 rounded hover:bg-blue-600"
        >
          Создать
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
