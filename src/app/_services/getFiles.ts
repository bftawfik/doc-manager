/* eslint-disable no-console */
import { File } from "../_types";

// eslint-disable-next-line import/no-unused-modules
export async function getFiles(searchQuery?: string): Promise<File[]> {
  let url = "http://localhost:3000/api/files";
  if (searchQuery) {
    url += `?q=${encodeURIComponent(searchQuery)}`;
  }

  try {
    const response = await fetch(url, { next: { revalidate: 10 } });
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
