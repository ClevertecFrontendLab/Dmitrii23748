/* eslint-disable unicorn/filename-case */
import { Navigate, Outlet } from 'react-router-dom';


export const PrivateRoute = () => {
    const auth = false;

    return (
        auth ? <Outlet/> : <Navigate to="auth"/>
    )
}
