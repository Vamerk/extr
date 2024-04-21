import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Api from "../api";
import { IUniversity } from "../api/interface/IUniversity";
import { SelectUser } from "../redux/user/selector";
import { checkAuth } from "../utils/checkAuth";

const ProfileUniversity = () => {
  const { id } = useParams();

  if (id === "create-university") {
    const navigate = useNavigate();

    navigate("/create-university");
  }

  checkAuth();

  const user = useSelector(SelectUser);

  const [university, setUniversity] = React.useState<IUniversity>({
    name: "",
    city_id: 0,
    delegate_id: 0,
    content: "",
    id: 0,
  });
  const [isOwner, setIsOwner] = React.useState(true);

  React.useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const { data } = await Api.university.get(Number(id));

        if (data.delegate_id === parseInt(user.id)) {
          setIsOwner(true);
        }
        console.log(data);
        setUniversity(data);
      } catch (error) {
        throw new Error("University not found " + error);
      }
    };

    fetchUniversity();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg relative flex justify-center"></div>
  );
};

export default ProfileUniversity;
