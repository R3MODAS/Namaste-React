import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
    const {status, statusText, error} = useRouteError();
    
    return (
        <div className='bg-black text-white min-h-screen flex items-center justify-center flex-col gap-2'>
            <h2 className='text-6xl font-GrotBlack text-red-600'><span>{status}</span> {statusText} !!!</h2>
            <p className='text-3xl font-GrotMed'>{error?.message}</p>
            <div className='text-xl font-GrotMed'>Wanna Navigate to Home Page ?</div>
            <Link to="/" className='mt-3 text-base font-GrotMed bg-white text-black w-20 h-10 rounded-md flex items-center justify-center'>Home</Link>
        </div>
    )
}

export default Error