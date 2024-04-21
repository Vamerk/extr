export interface IUniversity {
  id: number;
  name: string;
  content: string;
  delegate_id: number;
  city_id: number;
}

export interface IUniversityQuerystring {
  page?: number;
  limit?: number;
  search?: string;
}

export interface IUniversityResponseGet {
  data: IUniversity;
}

export interface IUniversityResponse {
  data: {
    universities: IUniversity[];
    total_records: number;
    total_pages: number;
  };
}

export interface IFaculty {
  id: number;
  name: string;
  university_id: number;
}

export interface IFacultyQuerystring {
  page?: number;
  limit?: number;
  search?: string;
  university_id?: number;
}

export interface IFacultyResponse {
  data: {
    faculties: IFaculty[];
    total_records: number;
    total_pages: number;
  };
}

export interface IDepartment {
  id: number;
  name: string;
  faculty_id: number;
}

export interface IDepartmentQuerystring {
  page?: number;
  limit?: number;
  search?: string;
  faculty_id?: number;
}

export interface IDepartmentResponse {
  data: {
    departments: IDepartment[];
    total_records: number;
    total_pages: number;
  };
}

export interface IFlow {
  id: number;
  name: string;
  department_id: number;
}

export interface IFlowQuerystring {
  page?: number;
  limit?: number;
  search?: string;
  department_id?: number;
}

export interface IFlowResponse {
  data: {
    flows: IFlow[];
    total_records: number;
    total_pages: number;
  };
}

export interface IGroup {
  id: number;
  name: string;
  flow_id: number;
}

export interface IGroupQuerystring {
  page?: number;
  limit?: number;
  search?: string;
  flow_id?: number;
}

export interface IGroupResponse {
  data: {
    groups: IGroup[];
    total_records: number;
    total_pages: number;
  };
}
