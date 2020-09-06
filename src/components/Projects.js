import React, { useEffect } from "react";
import {GitProjects} from "../shared/projects";
import {Accordion, Card, Button} from "react-bootstrap";

function Projects()
{

    return(
        <div className="container">
            <h1 className="text-6xl text-center">Projects</h1>
            <div calssName = "container mx-6">
                {
                    GitProjects.map((project) => {
                        return (
                            <div className="tab w-full overflow-hidden border-t">
                                <input className="absolute opacity-0" id={project.id} type="radio" name="tabs2" />
                                <label className="block p-5 leading-normal cursor-pointer text-2xl project-name" for={project.id}>{project.projectLink.split("/")[4].split(".")[0]}</label>
                                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <hr />
                                    <p className="px-10 py-4"><strong>Project owner : </strong>{project.name}</p>
                                    <p className="px-10 py-4"><strong>Email : </strong>{project.email}</p>
                                    <p className="px-10 py-4"><strong>Topic : </strong>{project.topic}</p>
                                    <p className="px-10 py-4"><strong>Description : </strong>{project.description}</p>
                                    <div className="my-4">
                                        <a href={project.projectLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10 my-4">View project</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
                
            </div>
        </div>
    )
}

export default Projects;