import React from 'react'
import './Header.scss'   
import { Link } from 'react-router-dom'
const Header = () => {
return (
    <nav>
        <div className="container">
            <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
            <ul>
                <li><Link to={'/'}>HOME</Link></li>
                <li><Link to={'/basket'}>BASKET</Link></li>
                <li><Link to={'/admin'}>ADMIN</Link></li>
                <li><Link>COURSES</Link></li>
                <li><Link>NEWS</Link></li>
                <li><Link>CONTACT</Link></li>
            </ul>
        </div>
    </nav>
)
}

export default Header