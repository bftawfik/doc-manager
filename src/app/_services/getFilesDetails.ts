/* eslint-disable no-console */
import { Version } from "../_types";

export async function getFilesDetails(ids?: string): Promise<Version[]> {
  const host =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  let url = `${host}/api/v2/files-details`;
  if (ids) {
    url += `?ids=${encodeURIComponent(ids)}`;
  }

  try {
    const response = await fetch(url);
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
