import React from 'react';
import './Header.styles.scss';
import {ReactComponent as Logo} from '../../assets/diamond.svg'
import {Link} from "react-router-dom";
import {auth} from "../../firebase/FireBase.util";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.compoent";
import {selectCurrentUser} from '../../Redux/User/user.selectors.js';
import {selectCartHidden} from '../../Redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect'

const Header = ({currentUser, hidden}) => (
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
            {!hidden ? <CartDropdown/> : null}
        </div>

    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);