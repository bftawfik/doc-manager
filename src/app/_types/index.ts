/* eslint-disable import/no-unused-modules */
export interface User {
  id: number;
  name: string;
  link: string;
  imageUrl: string;
}

export interface Doc {
  id: number;
  name: string;
  type: string;
  tags: string[];
  last_modified: string;
  isFav: boolean;
  assigned_users: User[];
}
