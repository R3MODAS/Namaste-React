import { useRouteError, Link } from 'react-router-dom'
import Styles from './Error.module.css'

const Error = () => {
    const {status, statusText, error} = useRouteError();
    
    return (
        <div className={Styles.ErrorContainer}>
            <h2 className={Styles.ErrorType}><span className={Styles.ErrorStat}>{status}</span> {statusText}!</h2>
            <p className={Styles.ErrorMsg}>{error?.message}</p>
            <div className={Styles.Navigate}>Wanna Navigate to Home Page ?</div>
            <Link to="/" className={Styles.Button}>Home</Link>
        </div>
    )
}

export default Error