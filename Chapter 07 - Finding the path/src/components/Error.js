import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return(
        <div className="error-container">
            <h1>{err.status}</h1>
            <h2>Oops!</h2>
            <span>Error 404 - {err.statusText}</span>
            <p>{err.error?.message}</p>
            <div className="redirect">Wanna Travel Back Home ? <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default Error;