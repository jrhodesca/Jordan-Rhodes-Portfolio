/** React */
import React from 'react';

/** Components */
import CardView from '../../components/CardView/CardView';
import { Projects } from '../../utils/cardViewUtils/Projects';

/** Styles */
import '../DefaultPage.css';
import './Main.css';

function Main() {
    return (
        <div className="page-content main">
            <div className="wrapper">
                <h2>Hello! &#128075; I'm a freelance User Experience Designer in Atlanta, Ga.</h2>
                <div className="card-gallery">
                    <CardView cardDetails={Projects.projects[0]}/>
                    <CardView cardDetails={Projects.projects[1]}/>
                    <CardView cardDetails={Projects.projects[2]}/>
                    <CardView cardDetails={Projects.projects[3]}/>
                </div>
            </div>
        </div>
    )

}

export default Main;