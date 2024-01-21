import React from 'react';
import { Link ,useLocation} from 'react-router-dom';
import Logo from "../logo/pro.png"


function Navbar() {
    const location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem("authToken"); 
        
    };
    return (
        <div className="container-fluid header">
            <div className="row">
                <div className="col-6">
                    <div className="logo" > 
                    <img src={Logo} alt="Logo"  style={{ maxWidth: '140px', height: 'auto' }}/>       
                    </div>
                </div>
                <div className="col-6">
                    <div className="text-end">
                        <ul className="list-inline">
                        {location.pathname === '/home/about' ? (
                                <li className="list-inline-item">
                                    <Link to="/home" className="top-icon"> Home
                                    </Link>
                                </li>
                            ) : (
                                <li className="list-inline-item">
                                    <Link to="/home/about" className="top-icon"> About
                                    </Link>
                                </li>
                            )}
                            <li className="list-inline-item">
                                <Link to="/login" onClick={handleLogout} className="top-icon"> Logout </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;