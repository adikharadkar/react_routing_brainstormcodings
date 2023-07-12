import {Link} from 'react-router-dom'


const HomePage = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Link to="/user">Go to the user page</Link>
        </>
    )
    
}

export default HomePage;