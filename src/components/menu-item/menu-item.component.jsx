import React from 'react';
import {withRouter} from 'react-router-dom';

import {
    MenuItemBackgroundImageContainer,
    MenuItemContainer,
    MenuItemContentContainer, MenuItemSubtitleContainer,
    MenuItemTitleContainer
} from "./MenuItem.style";

const MenuItem = ({title, imageUrl, size,linkUrl,history,match}) => (
    <MenuItemContainer  onClick={()=>history.push(`${match.url}${linkUrl}`)} className={`menu-item `}>
        <MenuItemBackgroundImageContainer

            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
        <MenuItemContentContainer>
            <MenuItemTitleContainer >{title}</MenuItemTitleContainer>
            <MenuItemSubtitleContainer >SHOP NOW</MenuItemSubtitleContainer>
        </MenuItemContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem);