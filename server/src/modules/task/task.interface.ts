export interface TaskInterface {
  description: string;
  projectId: number;
}

export interface GetTasksInterface {
  page: number;
  limit: number;
  id: number;
  projectId: number;
}

export interface UpdateInterface {
  id: number;
}
