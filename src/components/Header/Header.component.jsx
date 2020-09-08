import React from 'react';
import './Header.styles.scss';
import {ReactComponent as Logo} from '../../assets/clothes.svg'
import {Link} from "react-router-dom";
import {auth} from "../../firebase/FireBase.util";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.compoent";

const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>

        <div className="options">
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser ? <div onClick={() => auth.signOut()} className='option'>SIGN OUT</div> :
                    <Link to='/signin' className='option'>SIGN IN</Link>

            }
            <CartIcon/>
            {!hidden ? <CartDropdown/>:null}
        </div>

    </div>
)

const mapStateToProps = ({user:{currentUser},cart: {hidden}}) => ({
    currentUser,
    hidden
})


export default connect(mapStateToProps)(Header);