import NavigationBar from "../component/NavigationBar";

import {Outlet} from 'react-router-dom';

const MainPage = () => {
    return (
        <>
            <NavigationBar />
            
        <Outlet />
        </>
        
    )
}

export default MainPage;