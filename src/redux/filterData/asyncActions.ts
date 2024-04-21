import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  universitiesRes,
  facultiesRes,
  departmentsRes,
  flowsRes,
  groupsRes,
  usersRes,
} from "./types";
// Университет
export const fetchAllUniversities = createAsyncThunk<universitiesRes>(
  "filterData/fetchAllUniversitiesStatus",
  async () => {
    const url = `http://localhost:3000/api/universities/`;
    const response = (await axios.get(url)).data;
    const { data } = response;
    return data;
  }
);
// Факультет
export const fetchAllFaculties = createAsyncThunk<facultiesRes>(
  "filterData/fetchAllFacultiesStatus",
  async () => {
    const url = `http://localhost:3000/api/faculties/`;
    const response = (await axios.get(url)).data;
    const { data } = response;
    return data;
  }
);
// Кафедра
export const fetchAllDepartments = createAsyncThunk<departmentsRes>(
  "filterData/fetchAllDepartmentsStatus",
  async () => {
    const url = `http://localhost:3000/api/departments/`;
    const response = (await axios.get(url)).data;
    const { data } = response;
    return data;
  }
);
// Поток
export const fetchAllFlows = createAsyncThunk<flowsRes>(
  "filterData/fetchAllFlowsStatus",
  async () => {
    const url = `http://localhost:3000/api/flows/`;
    const response = (await axios.get(url)).data;
    const { data } = response;
    return data;
  }
);
// Группа
export const fetchAllGroups = createAsyncThunk<groupsRes>(
  "filterData/fetchAllGroupsStatus",
  async () => {
    const url = `http://localhost:3000/api/groups/`;
    const response = (await axios.get(url)).data;
    const { data } = response;
    return data;
  }
);
//

// Студкнты(рейтинг)
export const fetchUsers = createAsyncThunk<usersRes, any>(
  "filterData/fetchUsersStatus",
  async (params) => {
    const { universities, faculties, departments, flows, groups } = params;

    const queryParams = Object.assign(
      {},
      universities && { universities },
      faculties && { faculties },
      departments && { departments },
      flows && { flows },
      groups && { groups }
    );

    const url = `http://localhost:3000/api/users/`;
    const response = (
      await axios.get(url, {
        params: queryParams,
      })
    ).data;
    const { data } = response;
    return data;
  }
);
// Посты
export const fetchPosts = createAsyncThunk<groupsRes, any>(
  "filterData/fetchPostsStatus",
  async (params) => {
    const { universities, faculties, departments, flows, groups } = params;

    const queryParams = Object.assign(
      {},
      universities && { universities },
      faculties && { faculties },
      departments && { departments },
      flows && { flows },
      groups && { groups }
    );

    const url = `http://localhost:3000/api/posts/`;
    const response = (
      await axios.get(url, {
        params: queryParams,
      })
    ).data;
    const { data } = response;
    return data;
  }
);
