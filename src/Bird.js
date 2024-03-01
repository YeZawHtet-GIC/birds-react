import "./App.css";
import BirdList from "./BirdList";
import useFetch from "./useFetch";
//react loading 
import ReactLoading from 'react-loading';
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
        <div className="text-warning bg-dark text-center fs-1 pending-style" ><ReactLoading type="cylon" color="blue" height={100} width={100} /></div>
      )}
      {birds && <BirdList birds={birds} />}
    </>
  );
}

export default Bird;
