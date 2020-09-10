import React from 'react';
import MenuItem from "../menu-item/menu-item.component";

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {selectDirectorySection} from "../../Redux/directory/Directory.selectors";
import {DirectoryMenuContainer} from "./Directory.styles";

const Directory = ({sections}) => {

    return (
        <DirectoryMenuContainer >
            {sections.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps}/>
                )
            )}
        </DirectoryMenuContainer>
    )


}

const mapStateToProps = createStructuredSelector(
    {
        sections: selectDirectorySection
    }
)
export default connect(mapStateToProps)(Directory);