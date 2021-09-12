/** React */
import React from 'react';

/** Components */
import { Card } from 'antd';
import { Link } from 'react-router-dom';

/** Styles */
import './ProjectCardView.css';

function ProjectCardView(props) {
    const { Meta } = Card;

    return (
        <Link to={"/" + props.cardDetails.projectUrl}>
            <Card className="project-card card"
                hoverable
                cover={<div className="card-wrapper" style={{backgroundImage: "url(" + props.cardDetails.projectDetails.image +")"}}>
                            <div className="card-gradient">
                                <div className="card-content">
                                    <h4>{props.cardDetails.projectDetails.heading}</h4>
                                    <p>{props.cardDetails.projectDetails.time}</p>
                                    <p>{props.cardDetails.projectDetails.date}</p>
                                    <h4>{props.cardDetails.projectDetails.position}</h4>
                                </div>
                            </div>
                        </div>}
            >
            </Card>
        </Link>
    )

}

export default ProjectCardView;