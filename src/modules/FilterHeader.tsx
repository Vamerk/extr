import React, { useCallback, useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";

import { FilterInput } from "../components";

import { useSelector } from "react-redux";
import {
  fetchAllDepartments,
  fetchAllFaculties,
  fetchAllFlows,
  fetchAllGroups,
  fetchAllUniversities,
  fetchPosts,
  fetchUsers,
} from "../redux/filterData/asyncActions";
import { selectFilterData } from "../redux/filterData/selectors";
import { useAppDispatch } from "../redux/store";
import { MultiValueGeneric } from "react-select/dist/declarations/src/components/MultiValue";

type FilterHeaderProps = {
  name: string;
};

export const FilterHeader: React.FC<FilterHeaderProps> = ({ name }) => {
  const dispath = useAppDispatch();
  const {
    universitiesData,
    facultiesData,
    departmentsData,
    flowsData,
    groupsData,
  } = useSelector(selectFilterData);
  const getFilterData = async (): Promise<void> => {
    dispath(fetchAllUniversities());
    dispath(fetchAllFaculties());
    dispath(fetchAllDepartments());
    dispath(fetchAllFlows());
    dispath(fetchAllGroups());

    const selectedItemsMap = [
      selectedItems.universities,
      selectedItems.faculties,
      selectedItems.department,
      selectedItems.flows,
      selectedItems.groups,
    ];

    dispath(fetchUsers(selectedItemsMap));
  };
  const getResult = () => {
    name === "Post"
      ? dispath(fetchPosts(selectedItems))
      : dispath(fetchUsers(selectedItems));
  };

  useEffect(() => {
    getFilterData();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
  };

  const [selectedItems, setSelectedItems] = useState<any>({});

  const handleChange = useCallback(
    (selectedOption, selectName) => {
      const { label } = selectedOption;
      if (!selectedItems[selectName]?.includes(label)) {
        setSelectedItems({
          ...selectedItems,
          [selectName]: [...(selectedItems[selectName] || []), label],
        });
      }
    },
    [selectedItems]
  );

  const handleRemove = (selectName, itemToRemove) => {
    setSelectedItems({
      ...selectedItems,
      [selectName]: selectedItems[selectName].filter(
        (item) => item !== itemToRemove
      ),
    });
  };

  return (
    <div className="relative p-4 bg-white rounded-2xl  ">
      <div className="flex flex-col">
        <form onSubmit={handleForm}>
          <div className="relative mb-4">
            <IoMdSearch className="absolute top-3 left-3 cursor-pointer text-gray-400 text-2xl z-20" />
            <input
              className="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              type="text"
              placeholder="Введите"
            />
          </div>

          <div className="flex flex-col gap-y-2 mb-4">
            <FilterInput
              title={"universities"}
              items={universitiesData.universities}
              itemsData={universitiesData}
              placeholder={"Выберите ВУЗ"}
              selectedItems={selectedItems["universities"]}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
            <FilterInput
              title="faculties"
              items={facultiesData.faculties}
              itemsData={facultiesData}
              placeholder={"Выберите факультет"}
              selectedItems={selectedItems["faculties"]}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
            <FilterInput
              title="departments"
              items={departmentsData.departments}
              itemsData={departmentsData}
              placeholder={"Выберите кафедру"}
              selectedItems={selectedItems["departments"]}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
            <FilterInput
              title="flows"
              items={flowsData.flows}
              itemsData={flowsData}
              placeholder={"Выберите поток"}
              selectedItems={selectedItems["flows"]}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
            <FilterInput
              title="groups"
              items={groupsData.groups}
              itemsData={groupsData}
              placeholder={"Выберите группу"}
              selectedItems={selectedItems["groups"]}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={getResult}
          >
            Найти
          </button>
        </form>
      </div>
    </div>
  );
};
