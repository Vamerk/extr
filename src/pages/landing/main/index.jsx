import { HeaderSection } from "./HeaderSection";
import InformationSection from "./InformationSection";
import { About } from "./About";
import { Universities } from "./Universities";
import { Students } from "./Students";
import { Entrepreneurs } from "./Entrepreneurs";

export const MainSection = () => {
//     const FIRST_BENEFITS = [
//         "Увеличение продуктивности",
//         "Снижение количества ошибок в работе",
//         "Тесты, опросники, сертификации",
//         "Увлекательное обучение",
//         "Единая структура материалов компании",
//         "Корпоративная база знаний",
//         "Экономия времени менеджера",
//         "Автоматическая адаптация новичков",
//         "Интеграция с другими системами",
//         "Экономия времени сотрудников",
//         "Полная статистика о прогрессе обучения",
//         "Все сотрудники на одной волне",
//       ];
//       const SECOND_BENEFITS = [
//         "Организационная структура",
//         "Редактор курсов",
//         "Управление доступом",
//         "Каталог курсов",
//         "Программы обучения",
//         "Дедлайны",
//         "Роли",
//         "Кастомный дизайн",
//         "Мобильный интерфейс",
//         "Индивидуальные типы тестов и опросов",
//         "Геймификация",
//         "Статистика по обучению",
//       ];
    return (
      <div className="  dark::text-white w-full ">
        <HeaderSection />
        <About id="about-us"/>
        <Universities/>
        <Students/>
        <Entrepreneurs/>
        {/* <InformationSection
            name={"обучение сотрудников"}
            desc={"Адаптация новичков и обучение текущих сотрудников"}
            benefit={FIRST_BENEFITS}
            id="fist-info"
        /> */}
      </div>
    );
  };