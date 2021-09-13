/** React */
import React from 'react';

/** Components */
import { Card } from 'antd';
import { Link } from 'react-router-dom';

/** Styles */
import './ProjectCardView.css';

function ProjectCardView({cardDetails}) {
    const { Meta } = Card;

    return (
        <Link to={"/" + cardDetails.type + "?name=" + cardDetails.projectUrl}>
            <Card className="project-card card"
                hoverable
                cover={<div className="card-wrapper" style={{backgroundImage: "url(" + cardDetails.projectDetails.image +")"}}>
                            <div className="card-gradient">
                                <div className="card-content">
                                    <h4>{cardDetails.projectDetails.heading}</h4>
                                    <p>{cardDetails.projectDetails.time}</p>
                                    <p>{cardDetails.projectDetails.date}</p>
                                    <h4>{cardDetails.projectDetails.position}</h4>
                                </div>
                            </div>
                        </div>}
            >
            </Card>
        </Link>
    )

}

export default ProjectCardView;