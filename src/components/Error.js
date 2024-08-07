import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err); //check types of errors in browser console
  return (
    <div className="container">
      <h1>Opps!!!</h1>
      <h4>Something went wrong...</h4>
      <h2>{err.status} : {err.statusText}</h2>
    </div>
  )
}

export default Error;