import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaPenAlt } from "react-icons/fa";
import { student } from "../TESTDATA/User";
import { ProfilePostBlock } from "../components";
import { Link, useParams } from "react-router-dom";
import { checkAuth } from "../utils/checkAuth";
import { useSelector } from "react-redux";
import { SelectUser } from "../redux/user/selector";
import { get } from "../api/users";

const ProfileStudent = () => {
  const { firstname, lastname, group_id } = useSelector(SelectUser);
  const { id } = useParams();
  checkAuth(true);

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
  });

  const getUser = async (id: any) => {
    try {
      const res = await get(Number(id));
      const { data } = await res;
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser(id);
  }, []);

  console.log(userData.firstname);

  // Для фото
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  // Загрузка фото
  const handleFileUpload = (event, id: string) => {
    const file = event.target.files[0];

    id === "avatarInput" ? setSelectedAvatar(file) : setSelectedImage(file);
  };

  // Обработчки аватарки
  const handleUploadClick = () => {
    document.getElementById("avatarInput")?.click();
  };

  // Для постов
  const [selectedPostIndex, setSelectedPostIndex] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0); //Карусель счетчик

  const handlePostClick = (id) => {
    if (selectedPostIndex.includes(id)) {
      setSelectedPostIndex(selectedPostIndex.filter((index) => index !== id));
    } else {
      setSelectedPostIndex([...selectedPostIndex, id]);
    }
  };

  const [isHivered, setIsHobered] = useState<boolean>(false); // редактирование описания
  // Карусель постов
  const goToPrevSlide = () => {
    const newIndex =
      (currentIndex - 1 + student.publication.length) %
      student.publication.length;
    setCurrentIndex(newIndex);
  };
  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % student.publication.length;
    setCurrentIndex(newIndex);
  };
  const limitedStudents = student.publication.slice(
    currentIndex,
    currentIndex + 3
  );

  //Редактирование профиля
  const [updateProfileData, setUpdateProfileData] = useState({
    image: null,
    description: student.description,
  });

  const handleChangeProfile = (e) => {
    setUpdateProfileData({
      ...updateProfileData,
      description: e.currentTarget.value,
      image: selectedAvatar,
    });
  };

  const updateProfile = () => {};

  useEffect(() => {
    updateProfile();
  }, [updateProfileData]);

  // получение достижений
  const getAchievements = () => {};

  // получение постов
  const getPosts = () => {};

  // Создание поста
  const [dataNewPost, setDataNewPost] = useState({
    description: "",
    image: null,
    categoryId: 0,
  });

  const [radioData, setRadioData] = useState("");

  const handleChangePost = (e) => {
    setDataNewPost({
      ...dataNewPost,
      description: e.currentTarget.value,
      image: selectedImage,
      categoryId: Number(radioData),
    });
  };

  // Создание поста
  const createPost = () => {};

  // Подача заявки на подтвежление участия в мероприятии
  const [numberApplication, setNumberApplication] = useState(null);
  const handleChangeApplication = (e) => {
    setNumberApplication(e.currentTarget.value);
  };
  console.log(numberApplication);
  const submitApplication = () => {};

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="">
          <div>
            <img
              alt="Аватар"
              className="w-20 h-20 rounded-full hover:bg-black hover:opacity-50 cursor-pointer"
              onClick={handleUploadClick}
            />
          </div>

          <div>
            <h2></h2>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg relative ">
        <div className="flex flex-row mb-4">
          {/* Аватарка, Имя идругая инфа  */}
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
              <div className="flex flex-row items-center">
                <h2 className="text-lg font-bold">
                  #{1} {userData.firstname + " " + userData.lastname}
                </h2>
                <FaStar className="text-yellow-300 ml-2 " />
                <h2 className="text-xl font-bold">{student.stars}</h2>
              </div>
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
            <span className="font-bold cursor-pointer">О себе:</span>{" "}
            <textarea
              name=""
              id=""
              className="appearance-none border-none  resize-none size-full p-0 text-sm focus:border-slate-50"
              onChange={handleChangeProfile}
              value={updateProfileData.description}
            >
              {/* {student.description} */}
            </textarea>
            {isHivered && (
              <div className="absolute top-1/2 left-1/2 w-20 ">
                <FaPenAlt className="opacity-1 " />
              </div>
            )}
          </div>

          <div className="ml-auto px-10 right-0">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Достижения:</h3>
              <div className="grid grid-cols-2 items-center justify-between gap-4">
                <Link to={`../achievements/science/${id}`}>
                  <div className="flex  items-center justify-around cursor-pointer transition-all hover:-translate-y-1">
                    <img
                      src="../../public/science.png"
                      className="text-xl mr-2 max-w-10"
                    />
                    <h1 className="text-gray-600 text-xl">
                      {student.science.length}
                    </h1>
                  </div>
                </Link>

                <Link to={`../achievements/sport/${id}`}>
                  <div className="flex  items-center  justify-around cursor-pointer transition-all hover:-translate-y-1">
                    <img
                      src="../../public/sport.png"
                      className="text-xl mr-2 max-w-10"
                    />
                    <h1 className="text-gray-600 text-xl">
                      {student.science.length}
                    </h1>
                  </div>
                </Link>
                <Link to={`../achievements/creativity/${id}`}>
                  <div className="flex  items-center w-full justify-around cursor-pointer transition-all hover:-translate-y-1">
                    <img
                      src="../../public/creativity.png"
                      className="text-xl mr-2 max-w-10"
                    />
                    <h1 className="text-gray-600 text-xl">
                      {student.science.length}
                    </h1>
                  </div>
                </Link>
                <Link to={`../achievements/volunteering/${id}`}>
                  <div className="flex  items-center w-full justify-around cursor-pointer transition-all hover:-translate-y-1">
                    <img
                      src="../../public/volunteering.png"
                      className="text-xl mr-2 max-w-10"
                    />
                    <h1 className="text-gray-600 text-xl">
                      {student.science.length}
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-start mt-6  gap-x-6">
          <h4 className="text-lg">Участвовали в мероприятях?</h4>
          <div className="max-w-sm space-y-3">
            <input
              type="number"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Номер"
              value={numberApplication || ""}
              onChange={handleChangeApplication}
            />
          </div>
          <button
            type="button"
            className="my-2 ml-0 py-3 px-4  text-center inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Подтвердить
          </button>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0"></hr>

        <div className="flex-col grid justify-items-center my-4">
          <h3 className="text-lg font-semibold mb-4">Фотографии публикаций</h3>
          <div className="grid grid-cols-3 gap-4 relative">
            {limitedStudents.map((student) => (
              <div
                key={student.id}
                className="relative flex items-center transition-all"
              >
                {selectedPostIndex.includes(student.id) ? (
                  <ProfilePostBlock
                    publication={student}
                    handleClick={handlePostClick}
                  />
                ) : (
                  <img
                    src={student.image}
                    alt={`Student ${student.id}`}
                    className="w-full h-auto cursor-pointer"
                    onClick={() => handlePostClick(student.id)}
                  />
                )}
              </div>
            ))}
            <button
              className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-lg"
              onClick={goToPrevSlide}
            >
              <FaArrowLeft />
            </button>
            <button
              className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-lg"
              onClick={goToNextSlide}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="flex-col grid justify-items-center my-4">
          <h3 className="text-lg font-semibold mb-4">Что у вас нового?</h3>
          <div className="flex flex-col   gap-y-16 justify-between w-1/2">
            <div className="size-full">
              <p className="">Описание</p>
              <textarea
                name=""
                id=""
                className="appearance-none border resize-none size-full p-0 text-sm focus:border-slate-50"
                onChange={handleChangePost}
                value={dataNewPost.description}
              ></textarea>
            </div>

            <div className="flex  justify-center gap-x-4">
              <div className="w-full ">
                <div className="flex items-center justify-center w-full relative">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    {selectedImage && (
                      <img
                        src={
                          selectedImage
                            ? URL.createObjectURL(selectedImage)
                            : ""
                        }
                        // alt=""
                        className=" absolute size-full hover:bg-black hover:opacity-50 cursor-pointer"
                        onClick={handleUploadClick}
                      />
                    )}
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">
                          Нажмите, чтобы загрузить
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>

                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, "dropzone-file")}
                    />
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-y-2">
                <div className="flex items-center ">
                  <input
                    defaultChecked
                    id="default-radio-0"
                    type="radio"
                    value="0"
                    name="default-radio"
                    onChange={(e) => setRadioData(e.currentTarget.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-0"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Творчество
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="1"
                    name="default-radio"
                    onChange={(e) => setRadioData(e.currentTarget.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Наука
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-radio-2"
                    type="radio"
                    value="2"
                    name="default-radio"
                    onChange={(e) => setRadioData(e.currentTarget.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Спорт
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-radio-3"
                    type="radio"
                    value="3"
                    name="default-radio"
                    onChange={(e) => setRadioData(e.currentTarget.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-3"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Волонтерсво
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="my-4 ml-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Создать
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileStudent;
