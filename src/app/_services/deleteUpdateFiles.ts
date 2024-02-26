import { File } from "../_types";

/* eslint-disable import/no-unused-modules */
export async function deleteFile(idToDelete: number): Promise<void> {
  const url = `http://localhost:3000/api/files?id=${idToDelete}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to delete file: ${response.statusText}`);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error deleting file:", error);
    throw error;
  }
}

export async function updateFile(
  idToUpdate: number,
  newData: Partial<File>
): Promise<void> {
  const url = `http://localhost:3000/api/files?id=${idToUpdate}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    if (!response.ok) {
      throw new Error(`Failed to update file: ${response.statusText}`);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error updating file:", error);
    throw error;
  }
}
