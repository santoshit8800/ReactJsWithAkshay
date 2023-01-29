import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    const {status, statusText} = err;
    return (
        <div className="">
            <h1>Oops!</h1>
            <p>Something went wrong!!</p>
            <p>{status + " : " + statusText}</p>
        </div>
    )
}
export default Error;