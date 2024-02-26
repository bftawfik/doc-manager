/* eslint-disable import/no-unused-modules */
export interface User {
  id: number;
  name: string;
  link: string;
  imageUrl: string;
}
export interface database {
  id: number;
  name: string;
}
export interface File {
  id: number;
  name: string;
  status: string;
  type: string;
  tags: string[];
  last_modified: string;
  isFav: boolean;
  owner: User;
  version: database;
  versions: database[];
  databases: database[];
  assigned_databases: database[];
  users: User[];
  assigned_users: User[];
}
