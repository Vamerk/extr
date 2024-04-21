// Универы
export type universitiesItem = {
  id: number;
  name: string;
  content: string;
  delegate_id: number;
  city_id: number;
};

export interface universitiesRes {
  universities: universitiesItem[];
  total_records: number;
  total_pages: number;
}
// Факультеты
export type facultiesItem = {
  id: number;
  name: string;
  university_id: number;
};

export interface facultiesRes {
  faculties: facultiesItem[];
  total_records: number;
  total_pages: number;
}
// кафедры
export type departmentsItem = {
  id: number;
  name: string;
  faculty_id: number;
};

export interface departmentsRes {
  departments: departmentsItem[];
  total_records: number;
  total_pages: number;
}

// Потоки
export type flowsItem = {
  id: number;
  name: string;
  department_id: number;
};

export interface flowsRes {
  flows: flowsItem[];
  total_records: number;
  total_pages: number;
}
// Группы
export type groupsItem = {
  id: number;
  name: string;
  flow_id: number;
};

export enum UserType {
  STUDENT,
  DELEGATE,
  ADMIN,
}

export interface IUser {
  id: number;
  email: string;
  password: string;
  type: UserType;
  firstname: string;
  lastname: string;
  created_at: Date;
  group_id: number;
}

export interface groupsRes {
  groups: groupsItem[];
  total_records: number;
  total_pages: number;
}

export interface usersRes {
  users: IUser[];
  total_records: number;
  total_pages: number;
}

export interface FilterDataSliceState {
  universitiesData: universitiesRes;
  facultiesData: facultiesRes;
  departmentsData: departmentsRes;
  flowsData: flowsRes;
  groupsData: groupsRes;
  usersData: usersRes;
}
