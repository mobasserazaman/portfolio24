import Project from "./Project";
import { myprojects } from "./data";
export default function Projects() {

   
    return <div className="py-16 px-16">
        {myprojects.map(project => <Project title={project.title} description={project.description} year={project.year}/>)}
    </div>
}