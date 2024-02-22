/* eslint-disable import/no-unused-modules */
import { documents } from "./_data/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchQuery = searchParams.get("q");

  let searchResults = documents;
  if (searchQuery) {
    searchResults = documents.filter((doc) => {
      return doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }

  return new Response(JSON.stringify(searchResults));
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const idToDeleteString = searchParams.get("id");

  // Check if idToDeleteString is null, and handle accordingly
  if (idToDeleteString === null) {
    return new Response("ID parameter is missing", { status: 400 });
  }

  const idToDelete = parseInt(idToDeleteString);

  // Check if idToDelete is NaN, indicating the parameter couldn't be parsed as an integer
  if (isNaN(idToDelete)) {
    return new Response("Invalid ID parameter", { status: 400 });
  }

  const indexToDelete = documents.findIndex((doc) => doc.id === idToDelete);
  if (indexToDelete !== -1) {
    documents.splice(indexToDelete, 1);
    return new Response("Document deleted successfully", { status: 200 });
  } else {
    return new Response("Document not found", { status: 404 });
  }
}
export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const idToUpdateString = searchParams.get("id");

  // Check if idToUpdateString is null, and handle accordingly
  if (idToUpdateString === null) {
    return new Response("ID parameter is missing", { status: 400 });
  }

  const idToUpdate = parseInt(idToUpdateString);

  // Check if idToUpdate is NaN, indicating the parameter couldn't be parsed as an integer
  if (isNaN(idToUpdate)) {
    return new Response("Invalid ID parameter", { status: 400 });
  }

  const requestData = await request.json();
  const { isFav } = requestData;
  const documentToUpdate = documents.find((doc) => doc.id === idToUpdate);
  if (documentToUpdate) {
    documentToUpdate.isFav = isFav;
    return new Response("Document updated successfully", { status: 200 });
  } else {
    return new Response("Document not found", { status: 404 });
  }
}
