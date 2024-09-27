import MoviesData from "./components/MoviesData";

export default async function Home() {
  return (
    <>
      <h1 className="text-2xl my-4 text-center font-bold">Movies</h1>
      <MoviesData />
    </>
  );
}
