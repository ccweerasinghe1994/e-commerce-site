import React from 'react';
import {connect} from "react-redux";
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.compoent";
import {selectCurrentUser} from '../../Redux/User/user.selectors.js';
import {selectCartHidden} from '../../Redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect'
import {
    HeaderContainer, HeadingContainer,
    LogoContainer,
    OptionContainer,
    OptionContainerLink,
    LogoIcon
} from "./Header.styles";
import {signOutStart} from "../../Redux/User/user.action";

const Header = ({currentUser, hidden,signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <LogoIcon/>
            <HeadingContainer>FASHION STORE</HeadingContainer>
        </LogoContainer>

        <OptionContainer>
            <OptionContainerLink to='/shop'>SHOP</OptionContainerLink>
            <OptionContainerLink to='/contact'>CONTACT</OptionContainerLink>
            {
                currentUser ? <OptionContainerLink as='div' onClick={signOutStart}>SIGN OUT</OptionContainerLink> :
                    <OptionContainerLink to='/signin'>SIGN IN</OptionContainerLink>

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

const mapDispatchToProps = dispatch=>({
    signOutStart:()=>dispatch(signOutStart())
})


export default connect(mapStateToProps,mapDispatchToProps)(Header);