import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TERipple } from 'tw-elements-react';


// Импортируем интерфейсы запроса и ответа
interface IMindBrothersSearchRequest {
    faculty: string,
    cathedra: string,
    scienceStars: number,
    sportStars: number,
    creationStars: number,
    volunteerStars: number,
}

interface IMindBrothersSearchResponse {
    student_id: number,
    faculty: string,
    cathedra: string,
    scienceStars: number,
    sportStars: number,
    creationStars: number,
    volunteerStars: number,
}

// URL для отправки запроса
const NEURAL_NETWORK_BY_MANSUR_URL_PUSHKA = "http://localhost:8000";

const MindBrothersComponent: React.FC = () => {
    // Состояние для хранения данных, полученных из запроса
    const [mindBrothersData, setMindBrothersData] = useState<IMindBrothersSearchResponse[]>([]);

    // Функция для отправки запроса и обновления состояния с данными
    const fetchMindBrothersData = async () => {
        try {
            const studentRequest: IMindBrothersSearchRequest = {
                faculty: "Институт математики ",
                cathedra: "Кафедра программирования",
                scienceStars: 31,
                sportStars: 43,
                creationStars: 12,
                volunteerStars: 23
            };

            const { data } = await axios.post<IMindBrothersSearchResponse[]>(
                `${NEURAL_NETWORK_BY_MANSUR_URL_PUSHKA}/find/`,
                studentRequest
            );
            setMindBrothersData(data);
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    };

    // Вызываем fetchMindBrothersData при монтировании компонента
    useEffect(() => {
        fetchMindBrothersData();
    }, []); // Пустой массив зависимостей, чтобы запрос отправлялся только один раз при монтировании компонента

    return (
        <div>
            <h1>Mind Brothers</h1>
            <ul>
                {/* Рендерим полученные данные */}
                {mindBrothersData.map((brother) => (
                    <li key={brother.student_id}>
                        id: {brother.student_id}
                        Faculty: {brother.faculty}, Cathedra: {brother.cathedra}
                    </li>
                ))}
            </ul>
            <div
        className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
          Card title
        </h5>
        <p className="mb-4 text-base text-neutral-600 ">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <TERipple>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]">
            Button
          </button>
        </TERipple>
      </div>
        </div>
        
    );
};

export default MindBrothersComponent;
