import React from "react";
import './homePage.styles.scss';
import Directory from "../../components/directory/directory.component";
import {HomePageContainer} from "./HomePage.styles";

const HomePage = () => {
    return (
        <HomePageContainer >
            <Directory/>
        </HomePageContainer>
    )
}

export default HomePage;