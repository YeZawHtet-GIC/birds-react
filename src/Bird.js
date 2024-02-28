import "./App.css";
import BirdList from "./BirdList";
import useFetch from "./useFetch";

function Bird() {
  const {
    error,
    isPending,
    data: birds,
  } = useFetch("https://birds-data-json.vercel.app/Tbl_Bird");
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && (
        <div className="text-warning text-center fs-1">Loading...</div>
      )}
      {birds && <BirdList birds={birds} />}
    </>
  );
}

export default Bird;
