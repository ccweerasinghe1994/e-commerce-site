import React from 'react';
import './Header.styles.scss';
import {ReactComponent as Logo} from '../../assets/clothes.svg'
import {Link} from "react-router-dom";
import {auth} from "../../firebase/FireBase.util";
import {connect} from "react-redux";

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>

        <div className="options">
            {
                currentUser ? <div onClick={() => auth.signOut()} className='option'>SIGN OUT</div> :
                    <Link to='/signin' className='option'>SIGN IN</Link>

            }
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
        </div>

    </div>
)

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header);