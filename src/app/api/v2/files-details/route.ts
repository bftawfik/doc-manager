import { documents_2 as documents } from "../files/_data/data";

// eslint-disable-next-line import/no-unused-modules
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const idListString = searchParams.get("ids");

  if (idListString === null) {
    return new Response("No IDs provided", { status: 400 });
  }

  const idList = idListString.split(",").map((id) => Number(id));

  const results = documents
    .filter((document) => idList.includes(document.id))
    .map((document) => {
      return {
        ...document.versions[document.last_updated_version],
      };
    });

  return new Response(JSON.stringify(results));
}
