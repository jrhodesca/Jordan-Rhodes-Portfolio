/** React */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


/** Components */
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

/** Assets */
import { Projects } from '../../utils/cardViewUtils/Projects';
import pdf from '../../assets/pdf/coursana.pdf';

/** Styles */
import './CaseStudy.css';

function CaseStudy() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(2);
    const search = useLocation().search;
    const name = new  URLSearchParams(search).get('name');
    let project;

    Projects.projects.forEach(p => {
        if(p.projectUrl === name){
            project = p;
        }
    });

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
    }

    return (
        <div className="case-study"  style={{backgroundImage: "url(" + project.projectDetails.hero +")"}}>
            <div className="pdf-slider">
                <Document file={project.projectDetails.pdf}>
                    <Page pageNumber={2}/>
                </Document>
            </div>
        </div>
    )

}

export default CaseStudy;