
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='container'>
            <Outlet>
            </Outlet>
            <footer>Este es el footer</footer>
        </div>
    );
};

export default Layout;