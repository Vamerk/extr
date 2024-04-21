export interface IUniversity {
  id: number;
  name: string;
  content: string;
  delegate_id: number;
  city_id: number;
  faculties: IFaculty[];
}

export interface IFaculty {
  id: number;
  name: string;
  university_id: number;
  university: IDepartment[];
}

export interface IDepartment {
  id: number;
  name: string;
  faculty_id: number;
  faculty: IFaculty;
  flows: IFlow[];
}

export interface IFlow {
  id: number;
  name: string;
  department_id: number;
  department: IDepartment;
  groups: IGroup[];
}

export interface IGroup {
  id: number;
  name: string;
  flow_id: number;
  flow: IFlow;
}
