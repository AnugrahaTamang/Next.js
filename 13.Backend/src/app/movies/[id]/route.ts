import { NextRequest } from "next/server";
import { movies } from "../db";
// export async function GET(
//   _req: Request,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = await params;
//   const movie = movies.find((m) => m.id === +id);
//   return movie
//     ? new Response(JSON.stringify(movie))
//     : new Response("Not found value", { status: 404 });
// }

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const movieid = +id;
  const movie = movies.find((m) => m.id === movieid);
  if (!movie) {
    return new Response(JSON.stringify({ error: "movie not found" }), {
      status: 404,
    });
  }
  try {
    const updateMovie = await req.json();
    const index = movies.findIndex((m) => m.id === movieid);
    if (index === -1) {
      return new Response(JSON.stringify({ error: "index not available" }), {
        status: 404,
      });
    }
    movies[index] = { ...movie, ...updateMovie };
    return new Response(JSON.stringify(movies[index]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Movie not found" }), {
      status: 404,
    });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const movieid = +id;
  const index = movies.findIndex((m) => m.id === movieid);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "not found the element" }), {
      status: 404,
    });
  }
  movies.splice(index, 1);
  return new Response(JSON.stringify({ message: "successfully deleted" }), {
    status: 200,
  });
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterData = query
    ? movies.filter((n) => n.name.toLocaleLowerCase().includes(query))
    : movies;
  return new Response(JSON.stringify(filterData));
}
