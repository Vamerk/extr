export interface CurrentUser {
  created_at: string;
  email: string;
  firstname: string;
  group_id: number;
  id: string;
  lastname: string;
  type: string;
  university: {
    id: number;
  };
}
