import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  logo  from '../assets/logo.png'
import decode from "jwt-decode";
import search from '../assets/search-solid.svg'
import Avatar from './Avatar';
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css';
import { setCurrentUser } from '../actions/currentUser';

const Navbar = () => {

  var User = useSelector((state) => state.currentUserReducer);    
    //var User = JSON.parse(localStorage.getItem('Profile'));
const dispatch = useDispatch();
const navigate = useNavigate();

const handleLogout = () => {
  dispatch({ type: "LOGOUT" });
  navigate("/");
  dispatch(setCurrentUser(null));
};


useEffect(() => {
  const token = User?.token;
  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
     handleLogout();
    }
  }
  dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
}, [dispatch]);


  return (
    <nav className='main-nav'>
      <div className="navbar">
        <Link to='/' className='nav-item nav-btn res-nav'>
           <img src={logo} alt='logo'/> 
        </Link>
        <Link to='/' className='nav-item nav-btn res-nav'>About</Link>
        <Link to='/' className='nav-item nav-btn res-nav'>Products</Link>
        <Link to='/' className='nav-item nav-btn res-nav'>For Teams</Link>
        <form>
            <input type='text' placeholder='Search...'/>
            <img src={search} alt="search" width="18" className="search-icon" />
        </form>
        <div className="navbar-2">
        { User === null ?(
            <Link to="/Auth" className="nav-item nav-links">Log in</Link>
        ) :
          <div className='center'>
                <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white">               
                <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link></Avatar>
          <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
          </div>

        }
        </div>
      </div>
    </nav>
  )
}

export default Navbar