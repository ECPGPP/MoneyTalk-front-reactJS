import AuthContext from '../context/AuthProvider';
import { Outlet, Navigate } from 'react-router-dom';

export const ProtectRoutes = () => {
    // const { cookies } = useAuth();

    // return cookies.token ? <Outlet/> : <Navigate to='/login' exact />
};