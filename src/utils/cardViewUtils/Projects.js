import coursana from '../../assets/images/coursana-card.png';
import spisgoht from '../../assets/images/spis-goht-card.png';
import designs from '../../assets/images/designs-card.png';
import sketches from '../../assets/images/sketches-card.png';
import coursanaHero from '../../assets/images/coursana-hero.png';
import spisgohtHero from '../../assets/images/spis-goht-hero.png';
import coursanaPdf from '../../assets/pdf/coursana.pdf';
import spisgohtPdf from '../../assets/pdf/spis-goht.pdf';


export const Projects = {
    "projects": [
        {
            "id": 4,
            "type": "project",
            "projectName": "CoursAna",
            "projectUrl": "coursana",
            "previousProject": "spisgoht",
            "projectDetails": {
                "image": coursana,
                "heading": "Online Learning Platform",
                "time": "1 month",
                "date": "2021",
                "position": "Lead Ux Designer",
                "pdf": coursanaPdf,
                "hero": coursanaHero,
                "color": "#DBD2F5",
                "prototypes": [
                    {
                        "name": "Mobile App",
                        "link": "https://www.figma.com/proto/4o2MuIA3TjcYtHFUjGWSiQ/Spis-Goht-v4?node-id=118%3A1058&page-id=7%3A444&scaling=min-zoom&show-proto-sidebar=1&starting-point-node-id=121%3A1981"
                    }
                ]
            }
        },
        {
            "id": 3,
            "type": "project",
            "projectName": "Spis Goht App",
            "projectUrl": "spisghot",
            "nextProject": "coursana",
            "projectDetails": {
                "image": spisgoht,
                "heading": "Restaurant App",
                "time": "3 months",
                "date": "2021",
                "position": "Lead Ux Designer",
                "pdf": spisgohtPdf,
                "hero": spisgohtHero,
                "color": "#BBE4C0",
                "prototypes": [
                    {
                        "name": "Web",
                        "link": "https://xd.adobe.com/view/b94a7a78-b512-4221-9b04-78623fa621f9-ec19/?fullscreen"
                    },
                    {
                        "name": "Tablet",
                        "link": "https://xd.adobe.com/view/331cb532-0688-40e6-aa5b-0bfe10d3344e-664f/?fullscreen"
                    },
                    {
                        "name": "Mobile",
                        "link": "https://xd.adobe.com/view/b0ebc257-c89e-43e0-82ac-21d391ccf5eb-e5b8/?fullscreen"
                    }
                ]
                
            }
        },
        {
            "id": 2,
            "type": "gallery",
            "projectName": "UI Designs",
            "projectUrl": "designs",
            "projectDetails": {
                "image": designs,
                "heading": "UI Designs",
                "time": " ",
                "date": " ",
                "position": " ",  
            }
        },
        {
            "id": 1,
            "type": "gallery",
            "projectName": "Sketches",
            "projectUrl": "sketches",
            "projectDetails": {
                "image": sketches,
                "heading": "Sketches",
                "time": " ",
                "date": " ",
                "position": " ",  
            }
        }
    ]
}