import axios from "../core/";
import {
  IDepartment,
  IDepartmentResponse,
  IFaculty,
  IFacultyResponse,
  IFlow,
  IFlowResponse,
  IGroup,
  IGroupResponse,
  IUniversity,
  IUniversityResponse,
  IUniversityResponseGet,
} from "./interface/IUniversity";

export const getAll = async (
  page: number,
  limit: number,
  search?: string
): Promise<IUniversity[]> => {
  const { data } = await axios.get<IUniversityResponse>("/universities", {
    params: {
      page,
      limit,
      search,
    },
  });

  return data.data.universities;
};

export const getAllFaculties = async (
  page: number,
  limit: number,
  university_id: number,
  search?: string
): Promise<IFaculty[]> => {
  const { data } = await axios.get<IFacultyResponse>("/faculties", {
    params: {
      page,
      limit,
      university_id,
      search,
    },
  });

  return data.data.faculties;
};

export const getAllDepartments = async (
  page: number,
  limit: number,
  faculty_id: number,
  search?: string
): Promise<IDepartment[]> => {
  const { data } = await axios.get<IDepartmentResponse>("/departments", {
    params: {
      page,
      limit,
      faculty_id,
      search,
    },
  });

  return data.data.departments;
};

export const getAllFlows = async (
  page: number,
  limit: number,
  department_id: number,
  search?: string
): Promise<IFlow[]> => {
  const { data } = await axios.get<IFlowResponse>("/flows", {
    params: {
      page,
      limit,
      department_id,
      search,
    },
  });

  return data.data.flows;
};

export const getAllGroups = async (
  page: number,
  limit: number,
  flow_id: number,
  search?: string
): Promise<IGroup[]> => {
  const { data } = await axios.get<IGroupResponse>("/groups", {
    params: {
      page,
      limit,
      flow_id,
      search,
    },
  });

  return data.data.groups;
};

export const get = async (id: number): Promise<IUniversityResponseGet> => {
  const { data } = await axios.get(`/universities/${id}`);

  return data;
};

export const create = async (val): Promise<IUniversityResponseGet> => {
  const { data } = await axios.post("/universities", val);

  return data;
};
