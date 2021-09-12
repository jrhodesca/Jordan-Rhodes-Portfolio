/** React */
import React from 'react';

/** Components */
import { Card } from 'antd';
import GalleryCardView from './GalleryCardView';
import ProjectCardView from './ProjectCardView';

/** Styles */

function CardView(props) {
    const type = () => {
        return props.cardDetails.type === "project";
    }

    return (
        <>{type() ? <ProjectCardView cardDetails={props.cardDetails} /> : <></>}</>
    );

}

export default CardView;