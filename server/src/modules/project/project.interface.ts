export interface ProjectInterface {
  projectId?: number;
  name: string;
}

export interface GetProjectsInterface {
  page: number;
  limit: number;
  id: number;
  userId: number;
}

export interface DeleteProjectInterface {
  projectId: number;
}
