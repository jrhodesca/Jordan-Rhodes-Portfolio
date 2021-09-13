/** React */
import { render } from 'ejs';
import React, { useState } from 'react';

/** Components */
import CardView from '../../components/CardView/CardView';
import { Projects } from '../../utils/cardViewUtils/Projects';

/** Styles */
import '../DefaultPage.css';
import './Main.css';

function Main() {

    const [projects, setProjects] = useState("");

    const renderProjects = () => {
        Projects.projects.forEach(project => {
            setProjects((prev) => (
                [...prev, <CardView cardDetails={project}/>]
            ));
        });
    }

    if(projects === ""){
        renderProjects();
    }

    return (
        <div className="page-content main">
            <div className="wrapper">
                <h2>Hello! &#128075; I'm a freelance User Experience Designer in Atlanta, Ga.</h2>
                <div className="card-gallery">
                    {projects}
                </div>
            </div>
        </div>
    )

}

export default Main;