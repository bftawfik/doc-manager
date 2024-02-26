/* eslint-disable import/no-unused-modules */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { documents } from "../files/_data/data";

export async function GET(request: Request) {
  const favFiles = documents.filter((doc) => doc.isFav === true);

  return new Response(JSON.stringify(favFiles));
}
