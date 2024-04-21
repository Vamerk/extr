import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AsyncSelect from "react-select";
import "../../App.css";
import * as Api from "../../api";
import { SelectRegistrationBlank } from "../../redux/registrationBlank/selector";

const FinalRegistration = () => {
  const navigate = useNavigate();
  const [universityInfo, setUniversityInfo] = React.useState({
    university: { name: "", id: 0 },
    faculty: { name: "", id: 0 },
    department: { name: "", id: 0 },
    flow: { name: "", id: 0 },
    group: { name: "", id: 0 },
  });
  const [universityOptions, setUniversityOptions] = React.useState({
    university: [{ label: "", value: "", id: 0 }],
    facutly: [{ label: "", value: "", id: 0 }],
    department: [{ label: "", value: "", id: 0 }],
    flow: [{ label: "", value: "", id: 0 }],
    group: [{ label: "", value: "", id: 0 }],
  });
  const registrationBlank = useSelector(SelectRegistrationBlank);

  React.useEffect(() => {
    (async () => {
      const universities = await Api.university.getAll(0, 20);

      if (universityInfo.university.id) {
        const faculties = await Api.university.getAllFaculties(
          0,
          20,
          universityInfo.university.id
        );

        const facultyOptionsMap = faculties.map((faculty) => ({
          value: faculty.name,
          label: faculty.name,
          id: faculty.id,
        }));

        setUniversityOptions((prev) => ({
          ...prev,
          facutly: facultyOptionsMap,
        }));
      }

      if (universityInfo.faculty.id) {
        const departments = await Api.university.getAllDepartments(
          0,
          20,
          universityInfo.faculty.id
        );

        const departmentsOptionsMap = departments.map((department) => ({
          value: department.name,
          label: department.name,
          id: department.id,
        }));

        setUniversityOptions((prev) => ({
          ...prev,
          department: departmentsOptionsMap,
        }));
      }

      if (universityInfo.department.id) {
        const flows = await Api.university.getAllFlows(
          0,
          20,
          universityInfo.department.id
        );

        const flowsOptionsMap = flows.map((flow) => ({
          value: flow.name,
          label: flow.name,
          id: flow.id,
        }));

        setUniversityOptions((prev) => ({
          ...prev,
          flow: flowsOptionsMap,
        }));
      }

      if (universityInfo.flow.id) {
        const groups = await Api.university.getAllGroups(
          0,
          20,
          universityInfo.flow.id
        );

        const groupsOptionsMap = groups.map((group) => ({
          value: group.name,
          label: group.name,
          id: group.id,
        }));

        setUniversityOptions((prev) => ({
          ...prev,
          group: groupsOptionsMap,
        }));
      }

      const universityOptionsMap = universities.map((university) => ({
        value: university.name,
        label: university.name,
        id: university.id,
      }));

      setUniversityOptions((prev) => ({
        ...prev,
        university: universityOptionsMap,
      }));
    })();
  }, [universityInfo]);

  const onSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const data = { ...registrationBlank, group_id: universityInfo.group.id };

      const token = await Api.auth.registerStudent(data);
      localStorage.setItem("access_token", token.data.access_token);
      localStorage.setItem("refresh_token", token.data.refresh_token);

      return navigate("/");
    } catch (error) {
      throw new Error("Failed registration: " + error);
    }
  };

  return (
    <>
      <div className="container max-w-lg mx-auto px-4 flex flex-col items-center justify-center">
        <div className="flex flex-col w-full">
          <div className="text-center">
            <h2 className="py-2 text-xl bg-violet-600 scale-105 text-white">
              Данные об образовании
            </h2>
          </div>
          <div className="bg-white shadow-lg px-16 py-8 rounded-lg">
            <form onSubmit={onSubmit}>
              <div>
                <label className="flex flex-col">
                  <span className="text-sm font-medium">
                    Образовательное учереждение
                  </span>
                  <AsyncSelect
                    placeholder="Выберите ВУЗ"
                    className="my-2"
                    required
                    options={universityOptions.university}
                    defaultInputValue={universityInfo.university.name}
                    onChange={(selectedOption) =>
                      selectedOption &&
                      setUniversityInfo((prev) => ({
                        ...prev,
                        university: {
                          name: selectedOption.value,
                          id: selectedOption.id,
                        },
                      }))
                    }
                  />
                </label>
              </div>
              <div className="mt-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium">Факультет</span>
                  <AsyncSelect
                    placeholder="Выберите факультет"
                    className="my-2"
                    required
                    options={universityOptions.facutly}
                    isDisabled={universityInfo.university.name.length === 0}
                    defaultInputValue={universityInfo.faculty.name}
                    onChange={(selectedOption) =>
                      selectedOption &&
                      setUniversityInfo((prev) => ({
                        ...prev,
                        faculty: {
                          name: selectedOption.value,
                          id: selectedOption.id,
                        },
                      }))
                    }
                  />
                </label>
              </div>
              <div className="mt-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium">Кафедра</span>
                  <AsyncSelect
                    placeholder="Выберите кафедру"
                    className="my-2"
                    required
                    isDisabled={universityInfo.faculty.name.length === 0}
                    options={universityOptions.department}
                    defaultInputValue={universityInfo.department.name}
                    onChange={(selectedOption) =>
                      selectedOption &&
                      setUniversityInfo((prev) => ({
                        ...prev,
                        department: {
                          name: selectedOption.value,
                          id: selectedOption.id,
                        },
                      }))
                    }
                  />
                </label>
              </div>
              <div className="mt-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium">Поток</span>
                  <AsyncSelect
                    placeholder="Выберите поток"
                    className="my-2"
                    required
                    isDisabled={universityInfo.department.name.length === 0}
                    options={universityOptions.flow}
                    defaultInputValue={universityInfo.flow.name}
                    onChange={(selectedOption) =>
                      selectedOption &&
                      setUniversityInfo((prev) => ({
                        ...prev,
                        flow: {
                          name: selectedOption.value,
                          id: selectedOption.id,
                        },
                      }))
                    }
                  />
                </label>
              </div>
              <div className="mt-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium">Группа</span>
                  <AsyncSelect
                    placeholder="Выберите группу"
                    className="my-2"
                    required
                    isDisabled={universityInfo.flow.name.length === 0}
                    options={universityOptions.group}
                    defaultInputValue={universityInfo.group.name}
                    onChange={(selectedOption) =>
                      selectedOption &&
                      setUniversityInfo((prev) => ({
                        ...prev,
                        group: {
                          name: selectedOption.value,
                          id: selectedOption.id,
                        },
                      }))
                    }
                  />
                </label>
              </div>
              <div className="mt-4">
                <button
                  className="w-full rounded bg-violet-100 border-2 border-violet-200 text-violet-600 text-sm px-4 py-2 transition-colors font-medium hover:bg-violet-600 hover:text-white"
                  type="submit"
                >
                  Завершить
                </button>
              </div>
            </form>
          </div>
          <div className="px-16 py-4 text-center">
            <div className="mt-4">
              <span className="text-sm text-zinc-400 text-center">
                <Link to="/auth/register/student" className="text-violet-400">
                  Вернуться назад
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalRegistration;
