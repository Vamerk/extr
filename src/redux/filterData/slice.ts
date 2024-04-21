import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllDepartments,
  fetchAllFaculties,
  fetchAllFlows,
  fetchAllGroups,
  fetchAllUniversities,
  fetchUsers,
} from "./asyncActions";
import { FilterDataSliceState } from "./types";

const initialState: FilterDataSliceState = {
  universitiesData: {
    universities: [],
    total_records: 0,
    total_pages: 0,
  },
  facultiesData: {
    faculties: [],
    total_records: 0,
    total_pages: 0,
  },
  departmentsData: {
    departments: [],
    total_records: 0,
    total_pages: 0,
  },
  flowsData: {
    flows: [],
    total_records: 0,
    total_pages: 0,
  },
  groupsData: {
    groups: [],
    total_records: 0,
    total_pages: 0,
  },
  usersData: {
    users: [],
    total_records: 0,
    total_pages: 0,
  },
};

const filterDataSlice = createSlice({
  name: "filterData",
  initialState,
  reducers: {},

  extraReducers(builder) {
    // Универы
    builder.addCase(fetchAllUniversities.pending, (state) => {
      state.universitiesData = initialState.universitiesData;
    });
    builder.addCase(fetchAllUniversities.fulfilled, (state, action) => {
      state.universitiesData = action.payload;
    });
    builder.addCase(fetchAllUniversities.rejected, (state) => {
      state.universitiesData = initialState.universitiesData;
    });

    // Факультеты
    builder.addCase(fetchAllFaculties.pending, (state) => {
      state.facultiesData = initialState.facultiesData;
    });
    builder.addCase(fetchAllFaculties.fulfilled, (state, action) => {
      state.facultiesData = action.payload;
    });
    builder.addCase(fetchAllFaculties.rejected, (state) => {
      state.facultiesData = initialState.facultiesData;
    });

    // Кафедры
    builder.addCase(fetchAllDepartments.pending, (state) => {
      state.departmentsData = initialState.departmentsData;
    });
    builder.addCase(fetchAllDepartments.fulfilled, (state, action) => {
      state.departmentsData = action.payload;
    });
    builder.addCase(fetchAllDepartments.rejected, (state) => {
      state.departmentsData = initialState.departmentsData;
    });

    // Потоки
    builder.addCase(fetchAllFlows.pending, (state) => {
      state.flowsData = initialState.flowsData;
    });
    builder.addCase(fetchAllFlows.fulfilled, (state, action) => {
      state.flowsData = action.payload;
    });
    builder.addCase(fetchAllFlows.rejected, (state) => {
      state.flowsData = initialState.flowsData;
    });

    // Группы
    builder.addCase(fetchAllGroups.pending, (state) => {
      state.groupsData = initialState.groupsData;
    });
    builder.addCase(fetchAllGroups.fulfilled, (state, action) => {
      state.groupsData = action.payload;
    });
    builder.addCase(fetchAllGroups.rejected, (state) => {
      state.groupsData = initialState.groupsData;
    });

    // users
    builder.addCase(fetchUsers.pending, (state) => {
      state.usersData = initialState.usersData;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.usersData = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.usersData = initialState.usersData;
    });
  },
});

export const {} = filterDataSlice.actions;

export default filterDataSlice.reducer;
