import React, { memo } from "react";
import { IoMdClose } from "react-icons/io";
import AsyncSelect from "react-select";

type FilterInputProps = {
  title: string;
  items: any;
  itemsData: any;
  placeholder: string;
  selectedItems: string[];
  handleChange: (selectedOption: any, selectName: string) => void;
  handleRemove: (selectName: string, itemToRemove: any) => void;
};

export const FilterInput: React.FC<FilterInputProps> = memo(
  ({
    title,
    items,
    itemsData,
    placeholder,
    selectedItems,
    handleChange,
    handleRemove,
  }) => {
    const defaultValue = itemsData && items.length > 0 ? items[0].name : "";

    if (!items) {
      return null;
    }

    return (
      <div className="w-64">
        <AsyncSelect
          placeholder={placeholder}
          className="my-2"
          options={
            itemsData
              ? items.map((item) => ({
                  value: item.id.toString(),
                  label: item.name,
                }))
              : []
          }
          defaultInputValue={
            title === "universities" ? defaultValue : placeholder
          }
          onChange={(selectedOption) => handleChange(selectedOption, title)}
        />
        <div className="flex flex-wrap">
          {selectedItems &&
            selectedItems.map((item, index) => (
              <span
                key={index}
                className="bg-gray-300 p-1 m-1 flex items-center rounded cursor-pointer"
              >
                {item}
                <IoMdClose onClick={() => handleRemove(title, item)} />
              </span>
            ))}
        </div>
      </div>
    );
  }
);
