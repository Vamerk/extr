import React from "react";
import AsyncSelect from "react-select";
import * as Api from "../api";

const CreateUniversity = () => {
  const [citiesOptions, setCitiesOptions] = React.useState([
    { label: "", value: "", id: 0 },
  ]);
  const [city, setCity] = React.useState({ label: "", value: "", id: 0 });
  const [blank, setBlank] = React.useState({
    name: "",
    content: "",
    city_id: 0,
  });

  React.useEffect(() => {
    (async () => {
      const cities = await Api.cities.get();

      const citiesMap = cities.map((el) => ({
        name: el.name,
        label: el.name,
        id: el.id,
      }));

      setCitiesOptions(citiesMap);
    })();
  }, []);

  const handleClick = (selectedOption) => {
    setCity({
      value: selectedOption.value,
      label: selectedOption.label,
      id: selectedOption.id,
    });

    setBlank((prev) => ({
      ...prev,
      city_id: parseInt(selectedOption.id),
    }));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    console.log(blank);
    const { data } = await Api.university.create(blank);

    console.log(data);
  };

  console.log(blank);
  return (
    <div className="p-4 bg-white rounded-lg relative flex justify-center">
      <form
        onSubmit={onSubmit}
        className="p-4 flex flex-col justify-center items-center text-center max-w-screen-md w-full"
      >
        <h1 className="text-3xl my-2">Создайте университет</h1>

        <div className="mb-4 relative w-full">
          <input
            id="name"
            type="text"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-3 pt-4"
            required
            value={blank.name}
            onChange={(ev) =>
              setBlank((prev) => ({ ...prev, name: ev.target.value }))
            }
          />
          <label
            htmlFor="name"
            className="absolute left-2 top-3 text-black transition-all duration-300"
          >
            Название университета
          </label>
        </div>

        <div className="mb-2 relative w-full">
          <input
            id="name"
            type="text"
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-3 pt-4"
            required
            value={blank.content}
            onChange={(ev) =>
              setBlank((prev) => ({ ...prev, content: ev.target.value }))
            }
          />
          <label
            htmlFor="name"
            className="absolute left-2 top-3 text-black transition-all duration-300"
          >
            Описание
          </label>
        </div>

        <AsyncSelect
          placeholder="Город"
          className="my-2 w-full"
          required
          options={citiesOptions}
          defaultInputValue={city.value}
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

export default CreateUniversity;
