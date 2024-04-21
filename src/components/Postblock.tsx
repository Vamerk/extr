import React, { useState } from "react";
import { checkAuth } from "../utils/checkAuth";

function truncateDescription(description, maxLength) {
  if (description.split(" ").length > maxLength) {
    return description.split(" ").slice(0, maxLength).join(" ") + "...";
  } else {
    return description;
  }
}

const PostBlock = ({ publication, handleClick }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isLiked, SetIsLiked] = useState(false);
  const [countLikes, setCountLikes] = useState(publication.likes);
  const maxLength = 20;

  const truncatedDescription = publication?.description
    ? truncateDescription(publication.description, maxLength)
    : "";

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleLikeClick = () => {
    checkAuth();

    SetIsLiked(!isLiked);
    if (isLiked) {
      setCountLikes((prev) => prev - 1);
    } else {
      setCountLikes((prev) => prev + 1);
    }
  };

  const [commentText, setCommentText] = useState("");

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setCommentText("");
  };

  return (
    <div
      className="block max-w-full  bg-white rounded-2xl"
      onClick={() => handleClick(publication.id)}
    >
      <div className=" p-4 mb-4">
        <div className="flex items-center mb-2">
          <img
            src={publication.image}
            alt="Фото"
            // className=" mr-2"
            className="w-20 h-20 rounded-full mr-2"
          />
          <div className="flex flex-col">
            <span
              className="cursor-pointer text-black text-xl"
              // onClick={handleUserClick}
            >
              {publication.userName}
            </span>
            <span className=" text-gray-600 text-sm mr-2">
              {publication.date}
            </span>
            <span
              className="cursor-pointer text-black"
              // onClick={handleGroupClick}
            >
              {publication.university}, {publication.faculty},{" "}
              {publication.group},
            </span>
          </div>
        </div>

        <div className="flex items-center mb-2">
          <span className="font-bold text-gray-600">Количество звездочек:</span>
          <span className="text-gray-500 ml-2">{publication.stars}</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-gray-500 ">
            {showFullDescription
              ? publication.description
              : truncatedDescription}

            <button
              onClick={toggleDescription}
              className="text-blue-500 hover:underline"
            >
              {showFullDescription ? "Свернуть" : "Показать еще"}
            </button>
          </span>
        </div>

        <div className="flex items-center mb-2">
          <img
            src={publication.image}
            alt="Фото"
            className=" mr-2 w-full h-auto"
          />
        </div>
        <div className="flex items-center mb-2">
          <span className="font-bold text-gray-600">Раздел:</span>
          <span className="text-gray-500 ml-2">{publication.section}</span>
        </div>
        <div className="flex  items-center  pb-4 border-b-2 ">
          <button
            onClick={handleLikeClick}
            className={
              isLiked
                ? `flex items-center gap-x-1  text-white py-1 px-3 rounded-xl bg-gray-400 mr-2`
                : `flex items-center gap-x-1 bg-gray-300 text-white py-1 px-3 rounded-xl hover:bg-gray-400 mr-2`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" />
            </svg>
            <span className="text-gray-800">{countLikes}</span>
          </button>
          <button className="flex items-end gap-x-1 bg-gray-300 text-white py-1 px-3 rounded-xl hover:bg-gray-400 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20 "
              height="20"
              viewBox="0 0 17 17"
            >
              <path d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path>
            </svg>
            <span className="text-gray-800">
              {publication.comments?.length}
            </span>
          </button>
        </div>
        {publication.comments && publication.comments.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2 ">Комментарии</h3>
            <div className="flex flex-col gap-y-4">
              {publication.comments.map((comment, index) => (
                <div key={index} className="flex items-start  ">
                  <img
                    src={comment.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div className="flex flex-col gap-0">
                    <span className="font-bold m-0 p-0">
                      {comment.userName}
                    </span>
                    <span>{comment.message} </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex items-center gap-x-2">
          {/* <h3 className="font-semibold mb-2">Оставить комментарий</h3> */}
          <input
            type="text"
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Введите ваш комментарий"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded-md "
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBlock;
