/** React */
import React from 'react';

/** Components */
import { Card } from 'antd';
import GalleryCardView from './GalleryCardView';
import ProjectCardView from './ProjectCardView';

/** Styles */

function CardView({cardDetails}) {
    const type = () => {
        return cardDetails.type === "project" || cardDetails.type === "gallery";
    }

    return (
        <>{type() ? <ProjectCardView cardDetails={cardDetails} /> : <></>}</>
    );

}

export default CardView;