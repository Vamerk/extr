import React from "react";
import { FaPenAlt } from "react-icons/fa";
import { student } from "../TESTDATA/User";
import { get } from "../api/universities";

type Params = {
  id: number;
};

const UniversityInfo: React.FC<Params> = ({ id }) => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedAvatar, setSelectedAvatar] = React.useState(null);
  const [isHivered, setIsHobered] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState({
    firstname: "",
    lastname: "",
  });
  const [updateProfileData, setUpdateProfileData] = React.useState({
    image: null,
    description: student.description,
  });

  const updateProfile = () => {};

  React.useEffect(() => {
    getUser(id);
  }, []);

  const handleFileUpload = (event, id: string) => {
    const file = event.target.files[0];

    id === "avatarInput" ? setSelectedAvatar(file) : setSelectedImage(file);
  };

  React.useEffect(() => {
    updateProfile();
  }, [updateProfileData]);

  const getUser = async (id: any) => {
    try {
      const res = await get(Number(id));
      const { data } = await res;
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUploadClick = () => {
    document.getElementById("avatarInput")?.click();
  };

  const handleChangeProfile = (e) => {
    setUpdateProfileData({
      ...updateProfileData,
      description: e.currentTarget.value,
      image: selectedAvatar,
    });
  };
  return (
    <>
      <div className="flex flex-row mb-4">
        <div className="flex flex-row mb-4 mr-auto left-0">
          <div className="relative">
            <img
              src={
                selectedAvatar
                  ? URL.createObjectURL(selectedAvatar)
                  : student.avatar
              }
              alt="Фото профиля"
              className="w-40 h-40 rounded-full hover:bg-black hover:opacity-50 cursor-pointer"
              onClick={handleUploadClick}
            />
            <input
              type="file"
              id="avatarInput"
              style={{ display: "none" }}
              onChange={(e) => handleFileUpload(e, "avatarInput")}
            />
          </div>
          <div className="ml-5">
            <p className="text-gray-600">Факультет: {student.faculty}</p>
            <p className="text-gray-600">Кафедра: {student.department}</p>
            <p className="text-gray-600">Поток: {student.flow}</p>
            <p className="text-gray-600">Группа: {student.group}</p>
          </div>
        </div>
        <div
          className="text-gray-600 w-1/3 transition-all hover:opacity-50 relative cursor-pointer"
          onMouseEnter={() => setIsHobered(true)}
          onMouseLeave={() => setIsHobered(false)}
        >
          <span className="font-bold cursor-pointer">О Университете:</span>{" "}
          <textarea
            name=""
            id=""
            className="appearance-none border-none  resize-none size-full p-0 text-sm focus:border-slate-50"
            onChange={handleChangeProfile}
            value={updateProfileData.description}
          ></textarea>
          {isHivered && (
            <div className="absolute top-1/2 left-1/2 w-20 ">
              <FaPenAlt className="opacity-1 " />
            </div>
          )}
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0"></hr>
    </>
  );
};

export default UniversityInfo;
