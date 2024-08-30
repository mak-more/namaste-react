import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err); //check types of errors in browser console
  return (
    <div className="container mx-auto m-10 text-center">
      <h1 className="font-bold text-5xl m-4">Opps!!!</h1>
      <h4 className="font-bold text-lg m-4">Something went wrong...</h4>
      <h2 className="font-bold text-2xl">{err.status} : {err.statusText}</h2>
    </div>
  )
}

export default Error;