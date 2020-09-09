import React from 'react';
import {ReactComponent as Logo} from '../../assets/diamond.svg'
import {auth} from "../../firebase/FireBase.util";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.compoent";
import {selectCurrentUser} from '../../Redux/User/user.selectors.js';
import {selectCartHidden} from '../../Redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect'
import {
    HeaderContainer,
    LogoContainer,
    OptionContainer,
    OptionContainerDiv,
    OptionContainerLink
} from "./Header.styles";

const Header = ({currentUser, hidden}) => (
    <HeaderContainer >
        <LogoContainer to='/' >
            <Logo className='logo'/>
            <span className='heading' >FASHION STORE</span>
        </LogoContainer>

        <OptionContainer >
            <OptionContainerLink to='/shop' >SHOP</OptionContainerLink>
            <OptionContainerLink to='/contact' >CONTACT</OptionContainerLink>
            {
                currentUser ? <OptionContainerDiv onClick={() => auth.signOut()} >SIGN OUT</OptionContainerDiv> :
                    <OptionContainerLink to='/signin' >SIGN IN</OptionContainerLink>

            }
            <CartIcon/>
            {!hidden ? <CartDropdown/> : null}
        </OptionContainer>

    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);