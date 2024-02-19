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
