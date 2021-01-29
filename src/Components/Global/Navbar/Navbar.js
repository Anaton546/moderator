import './Navbar.css'

import { NavLink, 
    useHistory, IndexRoute} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <>
        <div className='navContainer'>
            <NavLink activeClassName='active' className='link' to='/' exact>
            <div className='logo'>Moderator</div>
            </NavLink>
            <div className='routes'>
            <NavLink activeClassName='active' className='link' to='/commands'>
                <div className='route'>Commands</div>
                </NavLink>
                <NavLink activeClassName='active' className='link' to='/faq'>    
                <div className='route'>FAQ</div>
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default Navbar